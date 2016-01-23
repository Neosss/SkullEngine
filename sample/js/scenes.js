var tutorialScene = new SkullScene(game.width, game.height);
tutorialScene.addCharacter(momoyo);
tutorialScene.addCharacter(wanko);
tutorialScene.addCharacter(kris);
tutorialScene.addCharacter(miyako);
tutorialScene.addCharacter(skullchan);

skullchan.showCharacter();

tutorialScene.addBackground("sea", "images/background/bg04.bmp");
tutorialScene.setBackground("sea");

game.setScene(tutorialScene);
tutorialScene.startScene();

var textBox = new SkullSprite("images/textBox.png");
textBox.setScaleX(800, true);
textBox.setPosition(0, 360);
tutorialScene.addChild(textBox);

var portrait = new SkullSprite("images/skullchan.png");
portrait.setScaleY(250, true);
portrait.setPosition(0, 450);
tutorialScene.addChild(portrait);

var nameLabel = new SkullText("Skull-chan", 30);
nameLabel.setPosition(50, 405);
nameLabel.setColor(240, 240, 240);
nameLabel.setLines(game);
tutorialScene.addChild(nameLabel);

var text = new SkullText("Hello, my name is Skull-chan, and I will guide you through Skull Engine. Hope you like it!/nSo let's start by the basics.", 25);
text.setPosition(190, 490);
text.setColor(240, 240, 240);
text.maxWidth = 2200;
text.fontHeight = 30;
text.setLines(game);
tutorialScene.addChild(text);