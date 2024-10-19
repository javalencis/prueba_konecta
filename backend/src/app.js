import express from "express";
import cors from "cors";
import productsRoute from "./routes/products.routes.js";
const app = express();

app.use(
  cors({
    origin: ["http://192.168.1.9:5173", "http://localhost:5173/"],
  })
);
app.use(express.json());
app.use("/api/products", productsRoute);

export default app;
