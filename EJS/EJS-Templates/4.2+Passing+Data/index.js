import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs")
});

app.post("/submit", (req, res) => {
  const fname = req.body.fName
  const lname = req.body.lName
  const length = fname.length + lname.length
  const newTitle = `There are ${length} letters in your name`
  res.render("index.ejs", { fName: fname, lName: lname, title: newTitle })
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
