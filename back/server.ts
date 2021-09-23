const express = require("express");
const serveIndex = require("serve-index");

const app = express();
const port = 3000;
const dir = "../front/dist/front";
app.use((req, res, next) => {
  console.log("url:", req.url);
  next();
});

app.use(express.static(dir));
app.use(serveIndex(dir, { icons: true }));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
