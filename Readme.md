# Runix

**Runix** is an online code execution platform built with the **MERN stack** and powered by a **self-hosted Judge0 API**.  
It allows users to write, run, and test code directly in the browser across multiple programming languages — with a fast, secure, and user-friendly interface.

---

## 🚀 Features

- **Multi-language support** – Compile and run code in various programming languages.
- **Live code editor** – Syntax highlighting and editor shortcuts.
- **Secure execution** – Backend proxy hides Judge0 API and prevents abuse.
- **Responsive UI** – Works seamlessly on desktop and mobile.
- **Execution history** – Save and view past code snippets *(planned)*.
- **Shareable snippets** – Generate share links for your code *(planned)*.

---

## 🛠 Tech Stack

**Frontend**
- React
- CodeMirror / Monaco Editor (for syntax highlighting)

**Backend**
- Node.js + Express
- REST API for code execution
- Integration with Judge0 API

**Execution Engine**
- Self-hosted [Judge0](https://judge0.com) on Azure VM

**Database**
- MongoDB (for storing code history & user data)

**Deployment**
- Azure VM
- Nginx (reverse proxy, SSL, static hosting)

---

## ⚙️ How It Works

1. **User writes code** in the Runix editor and selects a programming language.
2. **Frontend sends request** to the backend `/api/execute` endpoint.
3. **Backend forwards request** to the internal Judge0 API (not exposed publicly).
4. **Judge0 compiles & runs** the code in a secure sandbox.
5. **Backend returns results** to the frontend for display.
