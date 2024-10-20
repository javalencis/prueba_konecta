import express from "express";
import cors from "cors";
import productsRoute from "./routes/products.routes.js";
import salesRoute from "./routes/sales.routes.js";
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/products", productsRoute);
app.use("/api/sales", salesRoute);

export default app;
