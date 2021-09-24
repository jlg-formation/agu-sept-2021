import cors from "cors";
import express from "express";
import { resolve } from "path";
import serveIndex from "serve-index";
import { Article } from "../front/src/app/interfaces/article";

const app = express();
const port = process.env.PORT || 3000;
const dir = resolve(process.cwd(), "../front/dist/front");

function generateId() {
  return Date.now() + "_" + Math.floor(Math.random() * 1e9);
}

let articles: Article[] = [
  {
    id: "a1",
    name: "Tournevis",
    price: 2.99,
    qty: 120,
  },
  {
    id: "a2",
    name: "Marteau",
    price: 7.2,
    qty: 10,
  },
];

app.use("/api", cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log("url:", req.url);
  next();
});

app.get("/api/articles", (req, res) => {
  res.json(articles);
});

app.post("/api/articles", (req, res) => {
  const article = req.body as Article;
  article.id = generateId();
  articles.push(article);
  res.status(201).json(article);
});

app.delete("/api/articles", (req, res) => {
  const ids = req.body as string[];
  articles = articles.filter((a) => !ids.includes(a.id));
  res.status(204).end();
});

app.use(express.static(dir));
app.use(serveIndex(dir, { icons: true }));

app.use((req, res) => {
  res.sendFile(dir + "/index.html");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
