import express from "express";
import productsRoute from "./routes/products.routes.js";
const app = express();

app.use(express.json());
app.use("/api/products", productsRoute);

export default app;
