import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com";


//TODO 1: Add your own bearer token from the previous lesson.
const yourBearerToken = "374a9b89-3da4-448e-82df-655ae8fffdf5"
const config = {
  headers: { Authorization: `Bearer ${yourBearerToken}` },
};

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "Waiting for data..." });
});

app.post("/get-secret", async (req, res) => {
  const searchId = req.body.id;
  try {
    const result = await axios.get(API_URL + "/secrets/" + searchId, config);
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }
});

app.post("/post-secret", async (req, res) => {
  const secret = req.body.secret
  const score = req.body.score
  try {
    const response = await axios.post(`${API_URL}/secrets`,{
      score: score,
      secret: secret
    }, config)
    const data = response.data 
    res.render("index.ejs", { content: JSON.stringify(data) })
    console.log(data)  
  } catch (error) {
    console.log(error)
  }
});

app.post("/put-secret", async (req, res) => {
  const secret = req.body.secret
  const score = req.body.score
  const searchId = req.body.id;
  try {
    const response = await axios.put(`${API_URL}/secrets/${searchId}`, {
      score: score,
      secret:secret
    } ,config)
    res.render("index.ejs", {content: JSON.stringify(response.data)})
  } catch (error) {
    console.log("Error making put request")
  }
});

app.post("/patch-secret", async (req, res) => {
  const searchId = req.body.id;
  const secret = req.body.secret
  try {
     const response = await axios.patch(`${API_URL}/secrets/${searchId}`, {
      secret: secret
     } ,config)
     res.render("index.ejs", {content: JSON.stringify(response.data)})
  } catch (error) {
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }
  
});

app.post("/delete-secret", async (req, res) => {
  const searchId = req.body.id;
  try {
    const response = await axios.delete(`${API_URL}/secrets/${searchId}`, config)
    res.render("index.ejs", {content: JSON.stringify(response.data)})
  } catch (error) {
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
