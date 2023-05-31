
var numberOfDrumButton = document.querySelectorAll(".drum").length;

for(var i = 0; i < numberOfDrumButton; + i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        
        var buttonInnerHTML = this.innerHTML;

        makeSounds(buttonInnerHTML);

        activeButton(buttonInnerHTML);



    });

}

document.addEventListener("keypress", function(e){
    makeSounds(e.key);

    activeButton(e.key);
});


function makeSounds(key){


    switch(key){
        case "w":
        var tom1 = new Audio("sounds/pikachu.mp3")
        tom1.play();
        break;

        case "s":
        var tom2 = new Audio("sounds/charmender.mp3")
        tom2.play();
        break;

        case "a":
        var tom3 = new Audio("sounds/squirtle.mp3")
        tom3.play();
        break;

        case "d":
        var tom4 = new Audio("sounds/bulbasaur8.mp3")
        tom4.play();
        break;


        default: console.log(buttonInnerHTML);
    }

}

function activeButton(currentKey){
    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function(){
    activeButton.classList.remove("pressed");
    },100);
}

// var audio = new Audio('sounds/tom-1.mp3');
// audio.play();