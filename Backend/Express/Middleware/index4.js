import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser"
import morgan from "morgan"

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({ extended: true}))

app.get("/", (req, res) => {
  console.log(req)
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  console.log(req.body)
  const street = req.body.street
  const pet = req.body.pet
  res.send(`<h1>Your band name is: </h1>\n <h2>${street} ${pet}</h2`)
})


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
