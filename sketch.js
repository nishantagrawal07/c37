var canvas ,  backgroundImg;
var gameState = 0;
var playerCount; 
var dataBase;
var form , player , game;
var playerCount;
var allPlayers;
var cars , car1 , car2,  car3 , car4;



function setup(){
  canvas=createCanvas(displayWidth-20,displayHeight-150);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw(){
  if(playerCount === 4 ){
    game.update(1);
  }
  
  if(gameState === 1){
    clear();
    game.play();
  }
}

