//Sample Demo
//Featuring Skull Engine.

var game = new SkullEngine(60, 800, 600);
var mySound = new SkullSound("song/Im here bitches.mp3", 100, true);
mySound.start();
mySound.init(100,true);

game.init();

var background = new SkullSprite("images/fondo.jpg", 0, 0);
game.addChild(background);

var character = new SkullSprite("images/character.png");
character.setScaleY(450, true);
character.setPosition(220, 100);
game.addChild(character);