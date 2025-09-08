import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com";

const yourUsername = "";
const yourPassword = "";
const yourAPIKey = "";
const yourBearerToken = "";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
  try {
  const response = await axios.get(`${API_URL}/random`) 
  const data = response.data
  res.render("index.ejs", { content: JSON.stringify(data)})
  } catch (error) {
    console.log('Error fetching data', error)
  }
});


app.get("/basicAuth", async (req, res) => {
  try {
    const response = await axios.get(`${API_URL}/all?page=2`, {
      auth: {
        username: yourUsername,
        password: yourPassword
      }
    })

    const data = response.data;
    res.render("index.ejs", { content: JSON.stringify(data) })
  } catch (error) {
    console.log("Error fetching data:", error.message);
    res.render("index.ejs", { content: "Error fetching data" })
  }
})


app.get("/apiKey", async (req, res) => {
  try {
  const response = await axios.get(`${API_URL}/filter?score=5&apiKey=${yourAPIKey}`)
  const data = response.data
  console.log(data)
  res.render("index.ejs", { content: JSON.stringify(data) })
} catch (error) {
    console.log("Error fetching data:", error.message);
    res.render("index.ejs", { content: "Error fetching data" })
}
 
})

app.get("/bearerToken", async (req, res) => {
  try {
    const response = await axios.get(`${API_URL}/secrets/42`, {
      headers: {
        Authorization: `Bearer ${yourBearerToken}`
      }
    })
    const data = response.data
    res.render("index.ejs", { content: JSON.stringify(data) })
  } catch (error) {
    console.log("Error fetching data:", error.message);
    res.render("index.ejs", { content: "Error fetching data" })
}
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
