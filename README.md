# 🧠 Thinkboard

Thinkboard is a full-stack **MERN note-taking application** where users can create, read, update, and delete notes in real time.  
It is built with a modern React frontend and a secure Express + MongoDB backend, including rate limiting and production-ready deployment.

🚀 **Live Demo:**  
👉 https://thinkboard-1z2n.onrender.com/

---

## ✨ Features

- 📝 Create, edit, and delete notes
- 📄 View all saved notes instantly
- ⚡ Fast React (Vite) frontend
- 🔒 Rate-limited API for security
- 🌐 RESTful backend with Express
- ☁️ MongoDB database
- 🚀 Deployed and production-ready

---

## 🛠️ Tech Stack

### Frontend
- React (Vite)
- Axios
- React Router
- Tailwind CSS

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- CORS
- dotenv
- Rate Limiter middleware

---

## 📁 Project Structure

Thinkboard/
│
├── backend/
│ ├── routes/
│ ├── models/
│ ├── middleware/
│ ├── config/
│ └── server.js
│
├── frontend/
│ ├── src/
│ ├── public/
│ └── dist/ (production build)
│
└── README.md


---

## 🔗 API Endpoints

| Method | Endpoint          | Description        |
|------|------------------|--------------------|
| GET  | `/api/notes`     | Get all notes      |
| POST | `/api/notes`     | Create a new note  |
| PUT  | `/api/notes/:id` | Update a note      |
| DELETE | `/api/notes/:id` | Delete a note |

---

## ⚙️ Environment Variables

Create a `.env` file in the **backend** folder:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
NODE_ENV=development //Or production

▶️ Run Locally
1️⃣ Clone the repository
git clone https://github.com/anitgt/Thinkboard.git
cd Thinkboard

2️⃣ Backend setup & backend setup


npm start build

npm run start


Backend & Backend will run on:

http://localhost:3000

🚀 Deployment

Frontend is built and served from the backend in production

Deployed on Render

Production API base URL uses relative /api path

Live URL:
👉 https://thinkboard-1z2n.onrender.com/


📌 Future Improvements

User authentication (JWT)

Categories or tags for notes

Search & filter notes

Dark mode 🌙

👨‍💻 Author

Anit Sarkar
🎓 CSE (AI & ML) Student

GitHub: https://github.com/anitgt

⭐ Support

If you like this project, consider giving it a ⭐ on GitHub — it really helps!


---
