function buttonAnimation(letter) {
    var activeButton = document.querySelector("." + letter)
    activeButton.classList.add("pressed")
    setTimeout(() => {
        activeButton.classList.remove("pressed")
    }, 100)
}

document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", function() {
    var htmlLetter = this.innerHTML
    switch (htmlLetter) {
        case "w":
            var tom1 = new Audio("./sounds/tom-1.mp3")
            tom1.play()
            buttonAnimation(htmlLetter)
            break
        case "a":
            var tom2 = new Audio("./sounds/tom-2.mp3")
            tom2.play()
            buttonAnimation(htmlLetter)
            break
        case "s":
            var tom3 = new Audio("./sounds/tom-3.mp3")
            tom3.play()
            buttonAnimation(htmlLetter)
            break
        case "d":
            var tom4 = new Audio("./sounds/tom-4.mp3")
            tom4.play()
            buttonAnimation(htmlLetter)
            break
        case "j":
            var snare = new Audio("./sounds/snare.mp3")
            snare.play()
            buttonAnimation(htmlLetter)
            break
        case "k":
            var crash = new Audio("./sounds/crash.mp3")
            crash.play()
            buttonAnimation(htmlLetter)
            break
        case "l":
            var kick = new Audio("./sounds/kick-bass.mp3")
            kick.play()
            buttonAnimation(htmlLetter)
            break
        default:
            console.log(this.innerHTML)
            break
    }
    })    
})



document.addEventListener("keydown", function(event) {
var key = event.key
    switch (key) {
        case "w":
            var tom1 = new Audio("./sounds/tom-1.mp3")
            tom1.play()
            buttonAnimation(key)
            break
        case "a":
            var tom2 = new Audio("./sounds/tom-2.mp3")
            tom2.play()
            buttonAnimation(key)
            break
        case "s":
            var tom3 = new Audio("./sounds/tom-3.mp3")
            tom3.play()
            buttonAnimation(key)
            break
        case "d":
            var tom4 = new Audio("./sounds/tom-4.mp3")
            tom4.play()
            buttonAnimation(key)
            break
        case "j":
            var snare = new Audio("./sounds/snare.mp3")
            snare.play()
            buttonAnimation(key)
            break
        case "k":
            var crash = new Audio("./sounds/crash.mp3")
            crash.play()
            buttonAnimation(key)
            break
        case "l":
            var kick = new Audio("./sounds/kick-bass.mp3")
            kick.play()
            buttonAnimation(key)
            break
        default:
            console.log(key)
            break
    }
    })    