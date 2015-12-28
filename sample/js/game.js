//Sample Demo
//Featuring Skull Engine.

var game = new SkullEngine(60, 800, 600);
var mySound = new SkullSound("song/bgm02.ogg", 1, true);
mySound.start();
mySound.init(100,true);

game.init();

var background = new SkullSprite("images/background/bg04.bmp");
background.setScaleY(600, true);
game.addChild(background);