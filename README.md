# 📝 Blog Platform with React, Appwrite, and TinyMCE

A modern blog application built using **React**, **Appwrite** (for authentication & database), and **TinyMCE** as the rich text editor. It includes user authentication, post creation with images and formatting, theme switching (dark/light), and a dynamic post feed.

---

## 🚀 Features

- 🔐 **User Authentication** (Login/Signup) via Appwrite
- ✍️ **Rich Text Editing** with TinyMCE
- 🌗 **Dark/Light Theme Toggle**
- 🖼️ **Add Post with Images & Formatted Content**
- 📃 **List All Posts** (only visible to logged-in users)
- 🧼 **Minimal UI** with TailwindCSS
- 🌍 **Routing** via React Router
- 📦 **State Management** using Redux

---

## 🛠️ Tech Stack

| Tech        | Description                          |
|-------------|--------------------------------------|
| React       | Frontend UI                          |
| Appwrite    | Backend as a Service (Auth + DB)     |
| Redux       | State Management                     |
| TinyMCE     | Rich Text Editor                     |
| TailwindCSS | Styling                              |
| React Router| Navigation                           |

---

## 🔧 Setup Instructions

### 1. Clone the Repo
```bash
git clone https://github.com/JAS2609/BlogApp-react-.git
cd BlogApp-react
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Appwrite
- Create a new Appwrite project at [cloud.appwrite.io](https://cloud.appwrite.io/)
- Enable:
  - **Users/Auth**
  - **Database** → Collection: `posts`
- Required attributes in `posts` collection:
  - `title`: string
  - `slug`: string
  - `content`: string
  - `featuredImage`: string (URL)
  - `userId`: string
  - `status`: string
- Set your `.env` with Appwrite project credentials:
```env
VITE_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
VITE_APPWRITE_PROJECT_ID=your_project_id
VITE_APPWRITE_DATABASE_ID=your_db_id
VITE_APPWRITE_COLLECTION_ID=your_collection_id
VITE_APPWRITE_BUCKET_ID=your_bucket_id
```

### 4. Start the Dev Server
```bash
npm run dev
```

---



---

## 📂 Folder Structure
```
src/
├── appwrite/           # Appwrite service logic
├── Components/         # Header, Footer, Editor (TinyMCE), etc.
├── Pages/              # Login, Signup, AddPost, AllPosts
├── store/              # Redux slice for auth
├── ThemeContext.js     # Theme context provider
├── App.jsx             # App with layout and routes
└── main.jsx            # Entry point
```

---

## 🙌 Acknowledgements

- [Appwrite](https://appwrite.io/)
- [TinyMCE](https://www.tiny.cloud/)
- [Unsplash](https://unsplash.com)
- [React + Redux Toolkit](https://redux-toolkit.js.org/)

