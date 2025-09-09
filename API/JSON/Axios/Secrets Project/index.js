import express from "express"
import axios from "axios"


const port = 3000
const app = express()
const API_URL = "https://secrets-api.appbrewery.com/random"
app.use(express.static("public"))

// 3. Use the public folder for static files.
app.get("/", async (req, res) => { 
    try {
        const response = await axios.get(API_URL)
        const data = response.data 
        res.render("index.ejs", { 
            secret: data.secret,
            user: data.username 
        })
    } catch (error) {
        console.log("Error: " + error)
    }
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})