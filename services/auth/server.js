import express from 'express';
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/auth.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/auth", authRoutes);

app.get("/hello", (req, res) =>{
    return res.status(201).json({'message': 'hello'});
})

const PORT = 8000;
app.listen(PORT, ()=> console.log(`Server running on port: ${PORT}`));