var wanko = new SkullCharacter("Wanko", game.width, game.height);
wanko.generalProperties.scaleY = 550;
wanko.addStateSprite("sad-uniform", "images/character/wanko/wanko01.png");
wanko.addStateSprite("sad-taiku", "images/character/wanko/wanko02.png");
wanko.addStateSprite("sad-uniform-portrait", "images/character/wanko/wanko03.png");
wanko.addStateSprite("sad-chibi-taiku-portrait", "images/character/wanko/wanko04.png");
wanko.addStateSprite("quest-cloth", "images/character/wanko/wanko05.png");
wanko.addStateSprite("normal-taiku-portrait", "images/character/wanko/wanko06.png");
wanko.addStateSprite("normal-uniform", "images/character/wanko/wanko07.png");
wanko.addStateSprite("normal-mizugi", "images/character/wanko/wanko08.png");
wanko.addStateSprite("sad-uniform-long", "images/character/wanko/wanko09.png");
wanko.setState("normal-uniform");
wanko.setTextColor(240, 240, 240);

var kris = new SkullCharacter("Kris", game.width, game.height);
kris.generalProperties.scaleY = 550;
kris.addStateSprite("hands-cloth-portrait", "images/character/kris/kris01.png");
kris.addStateSprite("quest-mizugi", "images/character/kris/kris02.png");
kris.addStateSprite("normal-uniform-portrait", "images/character/kris/kris03.png");
kris.addStateSprite("normal-cloth", "images/character/kris/kris04.png");
kris.addStateSprite("fight-jump", "images/character/kris/kris05.png");
kris.addStateSprite("hands-cloth", "images/character/kris/kris06.png");
kris.addStateSprite("quest-cloth", "images/character/kris/kris07.png");
kris.setState("quest-mizugi");

var momoyo = new SkullCharacter("Momoyo", game.width, game.height);
momoyo.generalProperties.scaleY = 550;
momoyo.addStateSprite("angry-uniform-portrait", "images/character/momoyo/momoyo01.png");
momoyo.addStateSprite("normal-cloth-portrait", "images/character/momoyo/momoyo02.png");
momoyo.addStateSprite("excited-cloth", "images/character/momoyo/momoyo03.png");
momoyo.addStateSprite("normal-cloth", "images/character/momoyo/momoyo04.png");
momoyo.addStateSprite("hands-uniform", "images/character/momoyo/momoyo05.png");
momoyo.addStateSprite("normal-casual", "images/character/momoyo/momoyo06.png");
momoyo.setState("hands-uniform");
momoyo.setTextColor(240, 240, 240);

var miyako = new SkullCharacter("Miyako", game.width, game.height);
miyako.generalProperties.scaleY = 550;
miyako.addStateSprite("normal-training", "images/character/miyako/miyako01.png");
miyako.addStateSprite("normal-cloth2", "images/character/miyako/miyako02.png");
miyako.addStateSprite("normal-casual-portrait", "images/character/miyako/miyako03.png");
miyako.addStateSprite("normal-cloth", "images/character/miyako/miyako04.png");
miyako.addStateSprite("turned-cloth", "images/character/miyako/miyako05.png");
miyako.addStateSprite("normal-uniform-portrait", "images/character/miyako/miyako06.png");
miyako.addStateSprite("turned-uniform", "images/character/miyako/miyako07.png");
miyako.addStateSprite("normal-taiku", "images/character/miyako/miyako08.png");
miyako.setState("normal-uniform-portrait");
miyako.setTextColor(240, 240, 240);

var skullchan = new SkullCharacter("Skull-chan", game.width, game.height);
skullchan.generalProperties.scaleY = 550;
//skullchan.generalProperties.positionX = alignX(game.left, game.width);
skullchan.addStateSprite("normal", "images/skullchan.png");
skullchan.setState("normal");
skullchan.setTextColor(240, 240, 240);

var narrator = new SkullCharacter("Narrador", game.width, game.height);
narrator.setTextColor(255, 200, 200);

var salva = new SkullCharacter("Salva", game.width, game.height);
salva.setTextColor(200, 200, 255);

var helper = new SkullCharacter("", game.width, game.height);
helper.setTextColor(240, 240, 240);