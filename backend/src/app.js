import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import userRouter from "./api/v1/routes/user/user.routes.js";
import authRouter from "./api/v1/routes/auth/auth.routes.js";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// API ENDPOINT
app.use("/api/v1/user", userRouter);
app.use("/api/v1/auth", authRouter);

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to the Express server!");
});

// Database Connect
connectDb();

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
