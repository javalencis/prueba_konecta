import express from "express";
import cors from "cors";
import productsRoute from "./routes/products.routes.js";
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/products", productsRoute);

export default app;
