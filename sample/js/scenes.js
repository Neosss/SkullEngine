var tutorialScene = new SkullScene();
tutorialScene.addCharacter(kris);
tutorialScene.addCharacter(momoyo);
tutorialScene.addCharacter(wanko);
tutorialScene.addCharacter(miyako);

kris.enabled = true;
kris.setState("normal-cloth");

tutorialScene.startScene();

game.setScene(tutorialScene);

var textBox = new SkullSprite("images/textBox.png");
textBox.setScaleX(800, true);
textBox.setPosition(0, 360);
tutorialScene.addChild(textBox);

var portrait = new SkullSprite("images/character/kris/kris04.png");
portrait.setScaleY(350, true);
portrait.setPosition(0, 400);
tutorialScene.addChild(portrait);

var nameLabel = new SkullText("Christiane", 30);
nameLabel.setPosition(50, 405);
nameLabel.setColor(240, 240, 240);
tutorialScene.addChild(nameLabel);

var text = new SkullText("What happened Salva?", 25);
text.setPosition(190, 490);
text.setColor(240, 240, 240);
tutorialScene.addChild(text);