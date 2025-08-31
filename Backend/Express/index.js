import express from "express";
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});

app.get("/", (req, res) => {
  res.render("test")
})

app.get("/contact", (req, res) => {
  res.send("234522123")
})