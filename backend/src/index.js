import express from "express"
import dotenv from "dotenv"
import authRoutes from "./routes/auth.js"
import messageRoutes from "./routes/message.js"
import { connectDB } from "./lib/db.js"
import cookieParser from "cookie-parser"
import cors from "cors"
import { app,server } from "./lib/socket.js"
import path from "path"

dotenv.config();

const PORT = process.env.PORT;

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));
app.use(cookieParser());
app.use(cors({
    // origin: "http://localhost:5173",
    origin: true,
    credentials: true
}));

app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);

if (process.env.NODE_ENV === "production") {
    const frontendDist = path.join(import.meta.dirname, "../../frontend/dist");

    app.use(express.static(frontendDist));

    app.get("{*path}", (req, res) => {
        res.sendFile(path.join(frontendDist, "index.html"));
    });
}


server.listen(PORT,()=>{
    // console.log(`App is Running on the port http://localhost:${PORT}`);
    connectDB();
});