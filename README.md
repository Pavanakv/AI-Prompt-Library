# 🚀 AI Prompt Library

A full-stack web application to manage AI Image Generation Prompts, built as part of a Front-end Developer Intern assignment.

---

## 📌 Features

* 📄 View all prompts
* 🔍 View prompt details
* 👁 Redis-based live view counter
* ➕ Add new prompt with validation
* ⚡ Clean and responsive UI

---

## 🛠 Tech Stack

### Frontend

* Angular (Standalone Components)
* TypeScript
* HTML/CSS

### Backend

* Django (Python)
* REST APIs (without DRF)

### Database

* SQLite (for development)

### Cache

* Redis (for view count tracking)

---

## 📂 Project Structure

```
ai-prompt-library/
│
├── backend/        # Django backend
│   ├── config/
│   ├── prompts/
│   └── manage.py
│
├── frontend/       # Angular frontend
│   ├── src/app/
│   └── package.json
│
└── README.md
```

---

## ⚙️ Setup Instructions

### 🔹 Backend Setup

```bash
cd backend
python -m venv venv
venv\Scripts\activate   # Windows
pip install django redis
python manage.py migrate
python manage.py runserver
```

---

### 🔹 Redis Setup

Make sure Redis is running:

```bash
docker run -d -p 6379:6379 redis
```

---

### 🔹 Frontend Setup

```bash
cd frontend
npm install
ng serve
```

Open in browser:

```
http://localhost:4200
```

---

## 🔗 API Endpoints

* `GET /api/prompts/` → List all prompts
* `POST /api/prompts/` → Create prompt
* `GET /api/prompts/:id/` → Get prompt detail + view count

---

## 🧠 Key Implementation Details

* Redis is used as the **source of truth for view counts**
* Each time a prompt is viewed, the counter increments
* Angular uses **Reactive Forms with validation**
* Clean separation of frontend and backend

---

## ⚠️ Notes

* SQLite is used for development (can be replaced with PostgreSQL)
* Redis must be running for view count feature

---

## 🚀 Future Improvements

* Add authentication (JWT)
* Tagging system for prompts
* Deployment using Docker / cloud platforms

---

## 👨‍💻 Author

Pavana K.V
