var tutorialScene = new SkullScene(game.width, game.height);
tutorialScene.addCharacter(momoyo);
tutorialScene.addCharacter(wanko);
tutorialScene.addCharacter(kris);
tutorialScene.addCharacter(miyako);
tutorialScene.addCharacter(skullchan);

tutorialScene.addBackground("wafu-room", "images/background/bg01.bmp"); //0
tutorialScene.addBackground("small-room", "images/background/bg02.bmp"); //1
tutorialScene.addBackground("sea", "images/background/bg03.bmp"); //2
tutorialScene.addBackground("park", "images/background/bg04.bmp"); //3
tutorialScene.addBackground("glamour", "images/background/bg05.bmp"); //4
tutorialScene.addBackground("wafu-shops", "images/background/bg06.bmp"); //5
tutorialScene.addBackground("living-room", "images/background/bg07.bmp"); //6

game.setScene(tutorialScene);
tutorialScene.startScene();

var textBox = new SkullSprite("images/textBox.png");
textBox.setScaleX(800, true);
textBox.setPosition(0, 360);
//tutorialScene.addChild(textBox);

var defaultTextbox = new SkullTextbox(15, 430, 770, 160);
defaultTextbox.setColor(0, 0, 0, 0.8);
defaultTextbox.enableLabel();
defaultTextbox.setLabelProperties(12, 15, 370, 335, 50);
tutorialScene.addTextBox(defaultTextbox);

var portrait = new SkullSprite("images/skullchan.png");
portrait.setScaleY(250, true);
portrait.setPosition(0, 450);

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
dialog2.backgroundSprites = tutorialScene.backgrounds;
dialog2.addDialog(narrator, "El mundo habia caido en una crisis...");
dialog2.addDialog(narrator, "Salva no econtraba su control remoto...");
dialog2.addDialog(narrator, "Mucho tiempo habia pasado desde la ultima vez que Salva perdio su control remoto.");
dialog2.addDialog(narrator, "Vamos, es que es un control, no se va ha perder. O si?");
dialog2.addDialog(narrator, "Salva sin su control es como un arbol sin hojas.");
dialog2.addDialog(narrator, "Es como un universo sin la tierra.");
dialog2.addDialog(narrator, "Si! Es como Wanko sin su peluche de conejo.");
dialog2.addDialog(narrator, "Por eso dejaremos de lado a Salva y su control. Y veremos la historia de Wanko y su peluche...");
dialog2.addDialog(narrator, "...");
dialog2.addDialog(wanko, "Aaah, donde esta mi peluche!?");
dialog2.addDialog(wanko, "Walter!! Donde estas!!??");
//dialog2.setBackground(tutorialScene.backgrounds[4]);
dialog2.setBackgroundEx(4);
dialog2.addDialog(narrator, "Wanko llama a su peluche Walter. Vaya loca tenemos aqui.");
dialog2.addDialog(wanko, "Walteeer!!??");
dialog2.changeStates(wanko, "show");
dialog2.changeStates(wanko, "state", "sad-uniform-portrait");
dialog2.addDialog(wanko, "Ahora que hare sin mi Walter.. uuhh");
dialog2.addDialog(helper, "Toc Toc Toc");
dialog2.addDialog(miyako, "Wankooo! Apurate, vamos a llegar tarde!");
dialog2.addDialog(wanko, "Aah, perdon ya salgo.");
dialog2.addDialog(wanko, "(Le dire a salva luego, para que me ayude a buscarlo.)");
//dialog2.setBackground(tutorialScene.backgrounds[2]);
dialog2.setBackgroundEx(6);
dialog2.changeStates(wanko, "hide");
dialog2.addDialog(miyako, "Y que hacias alla arriba?");
dialog2.changeStates(miyako, "show");
dialog2.changeStates(miyako, "positionX", alignX(game.center, game.width));
dialog2.addDialog(wanko, "Estaba buscando mi peluche.");
dialog2.changeStates(wanko, "show");
dialog2.changeStates(miyako, "hide");
dialog2.addDialog(miyako, "Aaah, se te perdio Walter. Luego le diremos a Salva para que lo busque.");
dialog2.changeStates(miyako, "show");
dialog2.changeStates(miyako, "state", "turned-uniform");
dialog2.changeStates(wanko, "state", "sad-uniform");
dialog2.changeStates(miyako, "positionX", alignX(game.left, game.width));
dialog2.changeStates(wanko, "positionX", alignX(game.right, game.width) - 50);
dialog2.addDialog(miyako, "Vamonos, que llegamos tarde.");
dialog2.changeStates(wanko, "state", "normal-uniform");
dialog2.changeStates(wanko, "positionX", alignX(game.right, game.width) - 50);
dialog2.addDialog(helper, "");
//dialog2.setBackground(tutorialScene.backgrounds[3]);
dialog2.setBackgroundEx(3);
dialog2.changeStates(miyako, "hide");
dialog2.changeStates(wanko, "hide");
dialog2.addDialog(salva, "Al final no encontre mi control...");
dialog2.addDialog(wanko, "Salvaa!!! Por aqui!!");
dialog2.addDialog(salva, '"Ignorar, ignorar"');
dialog2.addDialog(wanko, "Salva!? Porque no respondes?");
dialog2.changeStates(wanko, "show");
dialog2.changeStates(wanko, "positionX", alignX(game.center, game.width));
dialog2.addDialog(salva, "Ah, perdon perdon, estaba pensando en algo.");
dialog2.addDialog(wanko, "Si? Estabas pensando en Walter tambien? Ohhh gracias Salva!");
dialog2.addDialog(salva, "En Que!? Walter!?");
dialog2.addDialog(salva, '"Ahh si si, ese peluche. El peluche de elefante ese, si."');
dialog2.addDialog(salva, "Ehem. Si, efectivamente mi querida Wanko.");
dialog2.addDialog(wanko, "Entonces tu tambien lo vas a buscar!? Perfecto. Muchas gracias!");
dialog2.addDialog(salva, "Claro, te lo busca...re?");
dialog2.addDialog(salva, "No no, espera eso no fue lo que quis...");
dialog2.addDialog(miyako, "Wanko!! Apurate, te voy a dejar.");
dialog2.changeStates(wanko, "hide");
dialog2.changeStates(miyako, "positionX", alignX(game.center, game.width));
dialog2.changeStates(miyako, "show");
dialog2.addDialog(wanko, "Ah, se me hizo tarde. Nos vemos despues de clase en mi casa! Y me ayudas a buscarlo!");
dialog2.changeStates(miyako, "hide");
dialog2.changeStates(wanko, "show");
dialog2.addDialog(wanko, "Bye!!");
dialog2.addDialog(salva, "Bye...");
dialog2.changeStates(wanko, "hide");
dialog2.addDialog(salva, '"Me pregunto si en la farmacia venden algo para el estres..."');
dialog2.hideBackground();

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