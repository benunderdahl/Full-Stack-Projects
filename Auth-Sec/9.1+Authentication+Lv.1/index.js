import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import "dotenv/config"

const app = express();
const port = 3000;
const db = new pg.Client({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DB,
  password: process.env.PG_PASS,
  port: process.env.PG_PORT
})
db.connect()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/register", async (req, res) => {
  const email = req.body.username
  const password = req.body.password
  await db.query("INSERT INTO users (email, password) VALUES ($1, $2)", [email, password])
  res.redirect("/")
});

app.post("/login", async (req, res) => {
  const email = req.body.username
  const password = req.body.password
  const result = await db.query("SELECT password FROM users WHERE email = $1", [email])
  const data = result.rows[0]
  if (data) {
    if (password === data.password) {
      res.render("secrets.ejs")
    } else {
      res.redirect("/")
    }
  } else {
    res.redirect("/")
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
