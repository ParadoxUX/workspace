import express, { Express } from "express";
import dotenv from "dotenv";
import postsRoutes from "./routes/posts.router.js";
import { notFound } from "./controllers.js";

dotenv.config();

const app: Express = express();
const port = Number(process.env.PORT);

app.use(express.json());

app.use("/posts", postsRoutes);

app.use(notFound);

app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});
