import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PromptService {

  private baseUrl = 'http://127.0.0.1:8000/api/prompts/';

  constructor(private http: HttpClient) {}

  getPrompts() {
    return this.http.get<any[]>(this.baseUrl);
  }

  getPrompt(id: number) {
  return this.http.get<any>(`${this.baseUrl}${id}/`); 
}

  createPrompt(data: any) {
    return this.http.post(this.baseUrl, data);
  }
}