import cors from "cors";
import express from "express";
import morgan from "morgan";
import categoryRoutes from "./routes/category.routes.js";
import productRoutes from "./routes/product.routes.js";
import userRoutes from "./routes/user.routes.js";
const app = express();
app.use(express.json());


app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use("/api", productRoutes);
app.use("/api", categoryRoutes);
app.use("/api", userRoutes);
app.use(morgan("dev"));

app.listen(80, () => console.log("Server running on port", 80));
