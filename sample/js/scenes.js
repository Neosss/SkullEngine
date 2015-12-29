var tutorialScene = new SkullScene(game.width, game.height);
tutorialScene.addCharacter(momoyo);
tutorialScene.addCharacter(wanko);
tutorialScene.addCharacter(kris);
tutorialScene.addCharacter(miyako);

kris.showCharacter();
kris.setState("quest-mizugi");

tutorialScene.addBackground("sea", "images/background/bg03.bmp");
tutorialScene.setBackground("sea");

game.setScene(tutorialScene);
tutorialScene.startScene();


