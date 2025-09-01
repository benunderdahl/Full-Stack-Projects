import express from "express"
import { fileURLToPath } from 'url';
import { dirname } from 'path';


const app = express()
const port = 3000
const __dirname = dirname(fileURLToPath(import.meta.url))
app.set("view engine", "ejs")
app.set("views", __dirname + "/views")


const today = new Date();
var dayOfWeek = today.getDay()
var studyOrFun = ""
var weekOrWeekend = ""

if (dayOfWeek === 0 || dayOfWeek === 6) {
    weekOrWeekend = "the weekend"
    studyOrFun = "have fun"
} else {
    weekOrWeekend = "a weekday"
    studyOrFun = "work hard"
}


app.get("/", (req, res) => {
    res.render("index", { type: weekOrWeekend, task: studyOrFun})
})






app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})
