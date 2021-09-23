import cors from "cors";
import express from "express";
import serveIndex from "serve-index";
import { Article } from "../front/src/app/interfaces/article";

const app = express();
const port = 3000;
const dir = "../front/dist/front";

const articles: Article[] = [
  {
    name: "Tournevis",
    price: 2.99,
    qty: 120,
  },
  {
    name: "Marteau",
    price: 7.2,
    qty: 10,
  },
];

app.use(cors());

app.use((req, res, next) => {
  console.log("url:", req.url);
  next();
});

app.get("/api/articles", (req, res) => {
  res.json(articles);
});

app.use(express.static(dir));
app.use(serveIndex(dir, { icons: true }));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
