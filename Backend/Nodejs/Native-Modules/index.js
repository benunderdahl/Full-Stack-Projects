const fs = require("fs")
fs.readFile("./message2.txt", 'utf8',  (err, data) => {
    if (err) throw err 
    console.log(data)
})

fs.writeFile("./message2.txt", "This is a new text file", (err) =>{
    if (err) throw err
    console.log("File has been saved successfully")
})