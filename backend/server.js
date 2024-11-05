import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/connectDB.js";

import authRoutes from "./routes/auth.routes.js";

const app = express();
dotenv.config();
app.use(express.json())

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => res.send("Hello dear World"));

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log("connected server at PORT " + PORT);
});
