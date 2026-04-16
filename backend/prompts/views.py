from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt  
from .models import Prompt
import json
import redis

r = redis.Redis(host='localhost', port=6379, db=0)


def prompt_detail(request, id):
    try:
        prompt = Prompt.objects.get(id=id)
    except Prompt.DoesNotExist:
        return JsonResponse({"error": "Not found"}, status=404)

    key = f"prompt:{id}:views"
    view_count = r.incr(key)

    return JsonResponse({
        "id": prompt.id,
        "title": prompt.title,
        "content": prompt.content,
        "complexity": prompt.complexity,
        "view_count": view_count
    })



@csrf_exempt
def prompt_list(request):
    if request.method == "GET":
        prompts = list(Prompt.objects.values())
        return JsonResponse(prompts, safe=False)

    if request.method == "POST":
        try:
            data = json.loads(request.body)
        except:
            return JsonResponse({"error": "Invalid JSON"}, status=400)

        # validation
        if len(data.get("title", "")) < 3:
            return JsonResponse({"error": "Title must be at least 3 characters"}, status=400)

        if len(data.get("content", "")) < 20:
            return JsonResponse({"error": "Content must be at least 20 characters"}, status=400)

        if not (1 <= int(data.get("complexity", 0)) <= 10):
            return JsonResponse({"error": "Complexity must be between 1 and 10"}, status=400)

        prompt = Prompt.objects.create(
            title=data["title"],
            content=data["content"],
            complexity=data["complexity"]
        )

        return JsonResponse({"id": prompt.id})