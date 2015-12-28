var iroha = new SkullCharacter("Iroha");
iroha.addStateSprite("normal", "images/character2.png");
iroha.enabled = true;
iroha.generalProperties.scaleX = 370;
iroha.generalProperties.positionX = alignX(game.right, game.width);
iroha.generalProperties.positionY = game.height;
iroha.setState("normal");

var yukino = new SkullCharacter("Yukino");
yukino.addStateSprite("serious", "images/character3.png");
yukino.enabled = true;
yukino.generalProperties.scaleX = 400;
yukino.generalProperties.positionX = alignX(game.left, game.width);
yukino.generalProperties.positionY = game.height;
yukino.setState("serious");