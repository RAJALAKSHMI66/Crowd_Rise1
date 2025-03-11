import express from "express";
import cors from "cors";
import dotenv from "dotenv";

// ✅ Import routes with correct path
import authRoutes from "./src/routes/authRoutes.js"; 

dotenv.config();

const app = express();

app.use(cors({
  origin: "http://localhost:3000",
  credentials: true,
}));

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running!");
});

// ✅ Use the imported auth routes
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
