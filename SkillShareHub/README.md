
# 🚀 SkillShareHub

**SkillShareHub** is a full-stack micro-learning platform that enables users to share, discover, and interact with community-driven skill cards. Inspired by micro-blogging and peer learning, it promotes fast, skill-based knowledge sharing.

---

## 📸 Demo Screenshot

![SkillShareHub Preview](https://via.placeholder.com/900x400.png?text=SkillShareHub+Preview+Coming+Soon)

---

## 🛠️ Tech Stack

| Frontend       | Backend        | Database | Auth   | Hosting            |
|----------------|----------------|----------|--------|--------------------|
| React, Tailwind CSS | Node.js, Express | MongoDB  | JWT    | Vercel (Client), Render (API) |

---

## ✨ Features

- 🧑‍💻 User Authentication (JWT based)
- 📝 Create and share skill cards (title, description, tags)
- ❤️ Like, comment, and bookmark posts
- 🔎 Search & filter by tags or popularity
- 📈 User profiles with points system
- ⚙️ Admin moderation panel (optional)
- 📤 Image upload support with Cloudinary

---

## 📂 Folder Structure

```
SkillShareHub/
├── client/        # React frontend
├── server/        # Node.js backend with Express & MongoDB
├── README.md
└── .env.example   # Sample environment config
```

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/SkillShareHub.git
cd SkillShareHub
```

### 2. Setup Frontend
```bash
cd client
npm install
npm start
```

### 3. Setup Backend
```bash
cd ../server
npm install
cp .env.example .env
# Add your MongoDB URI and JWT_SECRET in the .env file
node index.js
```

---

## 📦 Environment Variables

Create a `.env` file in `server/` with the following:

```
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret_key
```

---

## 📄 License

This project is licensed under the MIT License.

---

## 🙌 Acknowledgements

- Inspired by Stack Overflow, Dev.to, and Medium
- Icons by [Lucide](https://lucide.dev)
- Deployed via [Vercel](https://vercel.com) and [Render](https://render.com)

---

## 💡 Contributing

Pull requests are welcome! For major changes, please open an issue first.

---

> Made with ❤️ by [Bhavya Sharma]
