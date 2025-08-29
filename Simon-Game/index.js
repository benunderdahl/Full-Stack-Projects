var buttonColors = ["red", "blue", "green", "yellow"]
var gamePattern = []
var userClickedPattern = []
var level = 0
var started = false

$("#green").click(() => {
    
})

$("#red").click(() => {
    
})
$("#yellow").click(() => {
    
})
$("#blue").click(() => {
   
})

function nextSequence() {
    userClickedPattern = []
   var randNumber = Math.floor(Math.random() * 4) 
   console.log(randNumber)
   level++
   $("h1").text("Level " + level)
   var randomColor = buttonColors[randNumber]
    gamePattern.push(randomColor)
    playSound(randomColor)
}

$(document).keypress(e => {
    if(!started) {
    $("h1").text("Level " + level)
   nextSequence()
    started = true
    }
})


$(".btn").click( function() {
    var userChosenColor = $(this).attr("id")
    userClickedPattern.push(userChosenColor)
    playSound(userChosenColor)
    animatePress(userChosenColor)
    checkAnswer(userClickedPattern.length - 1)
})

function playSound(name) {
    $("#" + name).fadeOut(100).fadeIn(100, () => {
    var sound = new Audio("./sounds/" + name + ".mp3")
    sound.play()
})
}

function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");

    setTimeout(function() {
        $("#" + currentColor).removeClass("pressed");
    }, 100);
}

function checkAnswer(currentLevel) {
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    console.log("success");

    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);
    $("h1").text("Game-Over, Press any key to restart");
    startOver();
  }
}
 
function startOver() {
    level = 0
    gamePattern = []
    started = false
}
