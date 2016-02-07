var tutorialScene = new SkullScene(game.width, game.height);
tutorialScene.addCharacter(momoyo);
tutorialScene.addCharacter(wanko);
tutorialScene.addCharacter(kris);
tutorialScene.addCharacter(miyako);
tutorialScene.addCharacter(skullchan);

wanko.showCharacter();

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
//tutorialScene.addChild(portrait);

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
dialog1.changeStates(skullchan, "positionX", 0);
dialog1.addDialog(skullchan, "I am going to be guiding you through this engine. And the first step is to show you a nice Demo.");
dialog1.addDialog(skullchan, "Skull Engine is composed of Scenes, Characters, and Dialogs.");
dialog1.changeStates(skullchan, "positionX", 100);
dialog1.addDialog(skullchan, "A Scene is a group of characters and dialogs. And you can see it as a 'portion' of the story.");
dialog1.addDialog(skullchan, "And a Character is... well, a Character. For example...");
dialog1.changeStates(skullchan, "positionX", 200);
dialog1.addDialog(narrator, "Hello everyone I am the mighty Narrator!");
dialog1.addDialog(skullchan, "As you can see, the narrator as spoken.");
dialog1.addDialog(skullchan, "The engine let's you switch between Characters easily.");
dialog1.addDialog(skullchan, "This is all for now. But remember this is a work in progress.");
dialog1.addDialog(skullchan, "We are going to have more features and improvements coming soon!!");
dialog1.addDialog(skullchan, "Have a nice day! Bye!");

var dialog2 = new SkullDialog();
dialog2.addDialog(wanko, "Hola Salva!!!");
dialog2.addDialog(salva, "Hola...");
dialog2.addDialog(wanko, "Vamos animate!");
dialog2.addDialog(salva, "Es que con solo verte me amarga la vida... ugh");
dialog2.addDialog(wanko, "Uhhh, otra vez estas siendo malo con migo.");
dialog2.changeStates(wanko, "state", "sad-uniform");
dialog2.addDialog(salva, "Aah, era una broma... jeje");
dialog2.addDialog(salva, "(Cuando me dejara en paz!!)");
dialog2.changeStates(wanko, "state", "normal-uniform");
dialog2.addDialog(wanko, "Ja! Lo sabia!");
dialog2.addDialog(salva, "...");
dialog2.addDialog(salva, "(Entonces porque se puso triste.)");
dialog2.addDialog(wanko, "Pero te veo sin animos, en serio.");
dialog2.addDialog(wanko, "Ah, ya se! Te animare con esto. Yo se que te gusta.");
dialog2.addDialog(salva, "Oye, que estas...");
dialog2.changeStates(wanko, "hide");
dialog2.addDialog(salva, "Wanko!! No, eso no!");
dialog2.addDialog(salva, "...");
dialog2.addDialog(wanko, "Tada!!!");
dialog2.changeStates(wanko, "state", "normal-mizugi");
dialog2.changeStates(wanko, "show");
dialog2.addDialog(salva, "Muchas gracias Wanko, me has alegrado el dia...");
dialog2.addDialog(wanko, "De nada!");

var eventHandler = new Input();
eventHandler.keyDownHandler = function(e)
{
    if(e.keyCode == eventHandler.keycode.SPACE || e.keyCode == eventHandler.keycode.ENTER)
    {
        dialog2.update();
        nameLabel.resetText(dialog2.character[dialog2.dialogCounter].name, game);
        nameLabel.setColor(dialog2.character[dialog2.dialogCounter].colorR,
                          dialog2.character[dialog2.dialogCounter].colorG,
                          dialog2.character[dialog2.dialogCounter].colorB);
        text.resetText(dialog2.dialog[dialog2.dialogCounter], game);
        text.setColor(dialog2.character[dialog2.dialogCounter].colorR,
                          dialog2.character[dialog2.dialogCounter].colorG,
                          dialog2.character[dialog2.dialogCounter].colorB);
        dialog2.nextDialog();
    }
};

eventHandler.addKeyboardEvents();