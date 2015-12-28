//Sample Demo
//Featuring Skull Engine.

var game = new SkullEngine(60, 800, 600);
var mySound = new SkullSound("song/Im here bitches.mp3", 100, true);
mySound.start();
mySound.init(100,true);

game.init();

var background = new SkullSprite("images/fondo.jpg");
background.setScaleY(600, true);
background.setAnchorPoint(0.5, 0.5);
background.setPosition(400, 300);
game.addChild(background);