// Var Declare

var food = document.getElementById("food")
var water = document.getElementById("water")
var exercise = document.getElementById("exercise")
var start = document.getElementById("start")
var restart = document.getElementById("restart")

//function
function startGame(){
    console.log("started game")
    
    food.style.visibility = "visible";
    water.style.visibility = "visible";
    exercise.style.visibility = "visible";

    food = 50
    water = 50
    exercise = 50    
    
    start.style.visibility = "hidden";
    restart.style.visibility = "visible";
}

function restart(){
    console.log("restarted game");

}

function giveFood() {
    console.log("Fed Meeseeks")
    food = food + 15
    water = water - 5
    exercise = exercise - 5
    updateHtml();
}

function giveWater(){
    console.log("Flasked Meeseeks")
    food = food - 5
    water = water + 15
    exercise = exercise - 2
    updateHtml();
}

function giveExercise(){
    console.log("Meeseeks did task")
    food = food + 15
    water = water - 5
    exercise = exercise +30
    updateHtml();
}

function updateHtml() {
    document.getElementById("food").innerHTML = food
    document.getElementById("water").innerHTML = water
    document.getElementById("exercise").innerHTML = exercise

    var lowestNum = Math.min(food, water, exercise)
    var imgSrc
    
    if (lowestStat <= 0) {
        imageSrc = 'passedOut.gif'
      } else if (lowestStat < 25) {
        imageSrc = 'tired.gif'
      } else if (lowestStat < 75) {
        imageSrc = 'neutral.png'
      } else if (lowestStat < 150) {
        imageSrc = 'upbeat.gif'
      } else {
        imageSrc = 'exuberant.gif'
      }
      document.getElementById("petImage").src = imageSrc
}

function agePet(){
    console.log("Time has passed, Mr.Meeseeks needs attention");

    food = food - 4
    water = water - 8
    exercise = exercise - 2

    updateHtml();
}

setInterval(agePet,2000)