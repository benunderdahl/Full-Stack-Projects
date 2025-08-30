import { input } from '@inquirer/prompts'
import fs from "fs"
import qr from "qr-image"



const answer = await input({ message: "Enter something you would like a QR=Code of: "})
var userQR = qr.image(answer)
userQR.pipe(fs.createWriteStream('qr.png'));
fs.writeFile("./response.txt", answer, (err) => {
    if (err) throw err
    console.log("error")
})
console.log(answer)