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

var character = new SkullSprite("images/character2.png");
character.setScaleY(500, true);
character.setPosition(220, 100);
game.addChild(character);

var textBox = new SkullSprite("images/textBox.png");
textBox.setScaleX(800, true);
textBox.setPosition(0, 360);
game.addChild(textBox);

var portrait = new SkullSprite("images/character2.png");
portrait.setScaleY(300, true);
portrait.setPosition(-60, 440);
game.addChild(portrait);

var nameLabel = new SkullText("IROHA", 30);
nameLabel.setPosition(50, 405);
nameLabel.setColor(240, 240, 240);
game.addChild(nameLabel);

var text = new SkullText("What happened Salva?", 25);
text.setPosition(190, 490);
text.setColor(240, 240, 240);
game.addChild(text);