//Sample Demo
//Featuring Skull Engine.

var game = new SkullEngine(60, 800, 600);
var mySound = new SkullSound("song/Im here bitches.mp3", 100, true);
mySound.start();
mySound.init(100,true);

game.init();

var background = new SkullSprite("images/fondo.jpg", 0, 0);
background.setScaleY(600, true);
game.addChild(background);

var iroha = new SkullCharacter("Iroha");
iroha.addStateSprite("normal", "images/character2.png");
iroha.addStateSprite("angry", "images/character3.png");
iroha.addStateSprite("happy", "images/character.png");
iroha.enabled = true;
iroha.setState("angry");

var tutorialScene = new SkullScene();
tutorialScene.addCharacter(iroha);
tutorialScene.startScene();

game.setScene(tutorialScene);