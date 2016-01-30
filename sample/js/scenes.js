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

var nameLabel = new SkullText("", 30);
nameLabel.setPosition(50, 405);
nameLabel.setColor(240, 240, 240);
nameLabel.setLines(game);
tutorialScene.addChild(nameLabel);

var text = new SkullText("", 25);
text.setPosition(190, 490);
text.setColor(240, 240, 240);
text.maxWidth = 480;
text.fontHeight = 30;
text.setLines(game);
tutorialScene.addChild(text);

var dialog1 = new SkullDialog();
dialog1.addDialog(skullchan, "Hello and welcome to Skull Engine! My name is Skull-chan.");
dialog1.addDialog(skullchan, "I am going to be guiding you through this engine. And the first step is to show you a nice Demo.");
dialog1.addDialog(skullchan, "Skull Engine is composed of Scenes, Characters, and Dialogs.");
dialog1.addDialog(skullchan, "A Scene is a group of characters and dialogs. And you can see it as a 'portion' of the story.");
dialog1.addDialog(skullchan, "And a Character is... well, a Character. For example...");
dialog1.addDialog(narrator, "Hello everyone I am the mighty Narrator!");
dialog1.addDialog(skullchan, "As you can see, the narrator as spoken.");
dialog1.addDialog(skullchan, "The engine let's you switch between Characters easily.");
dialog1.addDialog(skullchan, "This is all for now. But remember this is a work in progress.");
dialog1.addDialog(skullchan, "We are going to have more features and improvements coming soon!!");
dialog1.addDialog(skullchan, "Have a nice day! Bye!");

var eventHandler = new Input();


eventHandler.keyDownHandler = function(e)
{
    if(e.keyCode == eventHandler.keycode.SPACE || e.keyCode == eventHandler.keycode.ENTER)
    {
        nameLabel.resetText(dialog1.character[dialog1.dialogCounter].name, game);
        nameLabel.setColor(dialog1.character[dialog1.dialogCounter].colorR,
                          dialog1.character[dialog1.dialogCounter].colorG,
                          dialog1.character[dialog1.dialogCounter].colorB);
        text.resetText(dialog1.dialog[dialog1.dialogCounter], game);
        text.setColor(dialog1.character[dialog1.dialogCounter].colorR,
                          dialog1.character[dialog1.dialogCounter].colorG,
                          dialog1.character[dialog1.dialogCounter].colorB);
        dialog1.nextDialog();
    }
};

eventHandler.addKeyboardEvents();