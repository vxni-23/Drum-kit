
var buttons = document.querySelectorAll(".drum");

for(var i=0; i<buttons.length; i++) {
    buttons[i].addEventListener("click", handleClick);   
}

document.addEventListener("keydown", handleKeyboard);

function handleClick() {
   var buttonHtml = this.innerHTML;
   playAudio(buttonHtml);
   addAnimation(buttonHtml);
}

function handleKeyboard(event) {
    var keyValue = event.key;
    playAudio(keyValue);
    addAnimation(keyValue);
}

function playAudio(letter) {
    switch(letter) {
        case "w":
            new Audio("sounds/crash.mp3").play();
         break;
         case "a":
             new Audio("sounds/kick-bass.mp3").play();
         break;
         case "s":
             new Audio("sounds/snare.mp3").play();
         break;
         case "d":
             new Audio("sounds/tom-1.mp3").play();
         break;
         case "j":
             new Audio("sounds/tom-2.mp3").play();
         break;
         case "k":
             new Audio("sounds/tom-3.mp3").play();
         break;
         case "l":
             new Audio("sounds/tom-4.mp3").play();
         break;
         default:
             console.log(letter);
    }
}

function addAnimation(letter) {
    var activeButton = document.querySelector("." + letter);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}