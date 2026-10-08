# Apni Baat-chit — Full-Stack Real-Time Chat Application

A full-stack, responsive real-time messaging application built with the **MERN** stack (MongoDB, Express.js, React, Node.js), powered by **Socket.io** for real-time bidirectional communication and **Cloudinary** for image sharing and avatar storage.

---

## 🌟 Key Features

- **Real-Time Messaging**: Instant one-on-one messaging powered by Socket.io.
- **Online User Status**: Live indicators showing who is currently online in the chat.
- **Media & Image Sharing**: Send image attachments in chat messages stored securely on Cloudinary.
- **Profile Management**: Upload and update custom profile avatars with instant preview.
- **Authentication & Security**:
  - Secure JWT authentication stored in HTTP-only cookies.
  - Password hashing with `bcryptjs`.
  - Route protection on both backend and frontend.
- **32 Dynamic UI Themes**: Customizable appearance powered by DaisyUI themes with live preview and persistent local storage.
- **Responsive Design**: Mobile-friendly and desktop-optimized layout styled with Tailwind CSS.
- **Production Ready**: Express serves Vite production builds seamlessly with single-command deployment.

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) & [DaisyUI](https://daisyui.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Real-Time Client**: [Socket.io Client](https://socket.io/)
- **Routing**: [React Router DOM v7](https://reactrouter.com/)
- **HTTP Client**: [Axios](https://axios-http.com/)
- **Notifications**: [React Hot Toast](https://react-hot-toast.com/)

### Backend
- **Runtime**: [Node.js](https://nodejs.org/) (ES Modules)
- **Framework**: [Express.js v5](https://expressjs.com/)
- **Database**: [MongoDB](https://www.mongodb.com/) via [Mongoose](https://mongoosejs.com/)
- **WebSockets**: [Socket.io](https://socket.io/)
- **Cloud Storage**: [Cloudinary](https://cloudinary.com/) (image uploads)
- **Authentication**: [jsonwebtoken (JWT)](https://github.com/auth0/node-jsonwebtoken) + [cookie-parser](https://github.com/expressjs/cookie-parser)
- **Security**: [bcryptjs](https://github.com/dcodeIO/bcrypt.js)

---

## 📁 Project Structure

```text
Chat-App/
├── backend/
│   ├── src/
│   │   ├── controllers/      # Route controllers (auth & message)
│   │   ├── lib/              # Cloudinary, database, socket & helper utils
│   │   ├── middleware/       # Authentication verification middleware
│   │   ├── models/           # Mongoose schemas (User & Message)
│   │   ├── routes/           # Express API endpoints
│   │   └── index.js          # App entry point & static serving
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/       # Reusable UI & chat components
│   │   ├── constants/        # Theme definitions
│   │   ├── lib/              # Axios instance & utility functions
│   │   ├── pages/            # Home, Login, Signup, Profile, Settings
│   │   ├── store/            # Zustand stores (Auth, Chat, Theme)
│   │   ├── App.jsx           # Root layout & route configuration
│   │   └── main.jsx
│   └── package.json
│
├── package.json              # Root orchestration scripts
└── README.md
```

---

## ⚙️ Environment Configuration

Create a `.env` file inside the `backend/` directory:

```env
PORT=5001
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/anujOparota/Apni-Baat-chit.git
cd Chat-App
```

### 2. Install dependencies
```bash
# Install root, backend, and frontend dependencies
npm run build
```
*(Or install individually inside `backend` and `frontend` folders via `npm install`)*

### 3. Run in Development Mode

Run the backend server:
```bash
cd backend
npm run dev
```

In a separate terminal, run the frontend:
```bash
cd frontend
npm run dev
```

- Backend server: `http://localhost:5001`
- Frontend application: `http://localhost:5173`

---


## 📜 License

This project is licensed under the [ISC License](LICENSE).
