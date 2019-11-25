// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */

console.log();
$("#shoot").click(function(){
    //Computer choice//
    let computerCoice = Math.ceil(Math.random() * 3);
    if (computerCoice === 1) {
    $("#computerChoice").text("rock");
    }else if (computerCoice === 2){
    $("#computerChoice").text("paper");
    }else if (computerCoice === 3){
    $("#computerChoice").text("scissor");
    };
    console.log(computerCoice);
    //User Choice//
    let userChoice = $("#input").val();
    $("#userChoice").text(userChoice.toLowerCase());
    //Winner//
    if (2===2){
        console.log(good);
    }
});

// DOCUMENT READY FUNCTION BELOW

