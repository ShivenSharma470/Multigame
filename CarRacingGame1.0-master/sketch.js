var canvas, backgroundimage
var gamestate = 0
var playercount
var database
var allplayers
var form,game,player
var cars,car1,car2,car3,car4
function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-30)
  database = firebase.database()
  game=new Game();
  game.getstate();
  game.start();

}
function draw(){
  if(playercount === 4){
    game.update(1)
  }
  if(gamestate===1){
    clear();
    game.play();
  }
}