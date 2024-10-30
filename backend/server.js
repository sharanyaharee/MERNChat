import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js"

const app = express();
dotenv.config()

const PORT = process.env.PORT || 5000


app.get("/",(req,res)=>res.send("Hello dear World"));

app.use("/api/auth",authRoutes)



app.listen(PORT, (req, res) => console.log("connected server at PORT "+PORT));
