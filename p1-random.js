/*
    CIT 281 Project 1
    Name: Anthony Hudson
*/

//jshint esversion: 7

// Returns a random number between min (inclusive) and max (exclusive)
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function makeString(){
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'
    var string = "";
    var length = getRandomInteger(5, 25)
    for (var i = 0; i < length; i++){
        string += alphabet.charAt(getRandomInteger(5, 25))
    }

    console.log(string)
}

console.log(makeString())
