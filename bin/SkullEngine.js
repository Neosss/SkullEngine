//Pantalla
window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();

//ENG
//Helper functions for SkullEngine
//SPA
//Funciones de ayuda para SkullEngine

//ENG
//clamps the value x to the range [a,b]
//function returns the clamped value
//SPA
//limita el valor x a un rango entre [a,b]
//la funcion regresa el valor limitado
function clamp(x, a, b)
{
    if(x < a)
    {
        return a;
    }
    else if(x > b)
    {
        return b;
    }
    
    return x;
}

//ENG
//Helper functions for SkullEngine
//SPA
//Funciones de ayuda para SkullEngine

//ENG
//clamps the value x to the range [a,b]
//function returns the clamped value
//SPA
//limita el valor x a un rango entre [a,b]
//la funcion regresa el valor limitado
function clamp(x, a, b)
{
    if(x < a)
    {
        return a;
    }
    else if(x > b)
    {
        return b;
    }
    
    return x;
}

//returns a predefined position commonly used in visual novels
//             Screen
//*------------------------------*
//|       |       |       |      |
//|       |       |       |      |
//|       |       |       |      |
//|       |       |       |      |
//|       |       |       |      |
//|       |       |       |      |
//|       |       |       |      |
//|       |       |       |      |
//|       |       |       |      |
//*------------------------------*
//        |       |       |
//       left   center   right

function alignX(presetPos, screenWidth)
{
    switch(presetPos)
    {
        //left
        case 0:
            return (screenWidth / 4);
            break;
        //center
        case 1:
            return (screenWidth / 4) * 2;
            break;
        //right
        case 2:
            return (screenWidth / 4) * 3.2;
            break;
        default:
            return 0;
            break;
    }
}

//Random number generator helper
//random int between min and max (including max)
//REF. Mozilla
var getRandom = function(min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function SkullSprite(path, posX, posY, scaleX, scaleY)
{
    this.path = path || "";
    this.positionX = posX || 0;
    this.positionY = posY || 0;
    
    this.sprite = new Image();
    
    this.anchorPointX = 0;
    this.anchorPointY = 0;
    
    this.scaleX;
    this.scaleY;
    
    this.rect = {x : 0, y : 0, w : 0, h : 0};
    
    this.tmpScaleX = scaleX;
    this.tmpScaleY = scaleY;
    
    this.width = 0;
    this.height = 0;
    
    this.rotateAngle = 0;
    
    this.enabled = true;
    this.show = true;
    
    var self = this;
    
    this.sprite.onload = function ()
    {
        self.scaleX = self.sprite.width;
        self.scaleY = self.sprite.height;
    };
    
    this.sprite.src = this.path;
    
    this.setAnchorPoint = function(x, y)
    {
        if(x != undefined)
        {
            this.anchorPointX = clamp(x, 0.0, 1.0);
        }
        if(y != undefined)
        {
            this.anchorPointY = clamp(y, 0.0, 1.0);
        }
    };
    
    this.setRotation = function(angle)
    {
        if(angle != undefined)
        {
            this.rotateAngle = angle;
        }
    };
    
    this.getTranslateX = function()
    {
        if(this.scaleX != undefined)
        {
            return (this.anchorPointX * this.scaleX);
        }
        else
        {
            return (this.anchorPointX * this.sprite.width);
        }
    };
    
    this.getTranslateY = function()
    {
        if(this.scaleY != undefined)
        {
            return (this.anchorPointY * this.scaleY);
        }
        else
        {
            return (this.anchorPointY * this.sprite.height);
        }
    };
    
    this.setPositionX = function(posX)
    {
        this.positionX = posX;
    };
    
    this.setPositionY = function(posY)
    {
        this.positionY = posY;   
    };
    
    this.setPosition = function(posX, posY)
    {
        this.positionX = posX;
        this.positionY = posY;
    };
    
    this.setScaleX = function(scaleX, auto)
    {
        var autoScale = auto || false;
        this.sprite.onload = function()
        {
            if(autoScale)
            {
                var ruleOfThree = (scaleX*self.sprite.height)/self.sprite.width;
                self.scaleY = ruleOfThree;
            }
            else
            {
                self.scaleY = self.sprite.height;
            }
            
            self.scaleX = scaleX;
        }
        
        self.scaleX = scaleX;
    };
    
    this.setScaleY = function(scaleY, auto)
    {
        var autoScale = auto || false;
        this.sprite.onload = function()
        {
            if(autoScale)
            {
                var ruleOfThree = (scaleY*self.sprite.width)/self.sprite.height;
                self.scaleX = ruleOfThree;
            }
            else
            {
                self.scaleX = self.sprite.width;
            }
            
            self.scaleY = scaleY;
        }
        
        self.scaleY = scaleY;
    };
    
    this.setScale = function(scaleX, scaleY)
    {
        this.sprite.onload = function()
        {
            self.scaleX = scaleX;
            self.scaleY = scaleY;
        }
        
        self.scaleX = scaleX;
        self.scaleY = scaleY;
    };
    
    this.getPath = function()
    {
        return this.path;
    };
    
    this.getPositionX = function()
    {
        return this.positionX;
    };
    
    this.getPositionY = function()
    {
        return this.positionY;
    };
    
    this.getSprite = function()
    {
        return this.sprite;
    };
    
    this.getScaleX = function()
    {
        if(this.scaleX != undefined)
        {
            return this.scaleX;
        }
        else
        {
            return this.sprite.width;
        }
    };
    
    this.getScaleY = function()
    {
        if(this.scaleX != undefined)
        {
            return this.scaleY;
        }
        else
        {
            return this.sprite.height;
        }
    };
    
    this.getRect = function()
    {
        this.rect.x = this.positionX;
        this.rect.y = this.positionY;
        this.rect.w = this.scaleX;
        this.rect.h = this.scaleY;
        
        return this.rect;
    };
    
    //only for anchor point 0.5
    this.collidesWithRect = function(rect2)
    {
        var rect1 = this.getRect();
        //simple AABB (Axis-Aligned Bounding Box)
        //REF. Mozilla Developer / Game Techniques
        
        if (rect1.x < rect2.x + rect2.w &&
        rect1.x + rect1.w > rect2.x &&
        rect1.y < rect2.y + rect2.h &&
        rect1.h + rect1.y > rect2.y)
        {
            console.log("true");
            return true;
        }
        
        return false;
    };
}

function Input()
{
	this.pressedKeys = [];
	
    var self = this;
    
	this.keycode =
	{
		"BACKSPACE":8,"TAB":9,"ENTER":13,"ESCAPE":27,
		"SPACE":32, "LEFT":37, "UP":38, "RIGHT":39, "DOWN":40, "0":48,
		"1":49, "2":50, "3":51, "4":52 , "5":53, "6":54, "7":55, "8":56,
		"9":57, "A":65, "B":66, "C":67, "D":68, "E":69, "F":70,
		"G":71, "H":72, "I":73, "J":74, "K":75, "L":76,
		"M":77, "N":78, "O":79, "P":80, "Q":81, "R":82,
		"S":83, "T":84, "U":85, "V":86, "W":87, "X":88,
		"Y":89, "Z":90
	};
	
	this.addKeyboardEvents = function()
	{
        for(var i = 0; i < 250; i++)
        {
            this.pressedKeys.push(false);
        }
		
        document.addEventListener("keydown", this.keyDownHandler, false);
		document.addEventListener("keyup", this.keyUpHandler, false);
	};
	
	this.keyDownHandler = function(e)
	{
		self.pressedKeys[e.keyCode] = true;
	};
	
	this.keyUpHandler = function(e)
	{
		self.pressedKeys[e.keyCode] = false;
	};
}

function SkullText(text, fontSize, positionX, positionY, maxWidth, fontHeight)
{
    this.text = text || "";
    this.positionX = positionX || 0;
    this.postiionY = positionY || 0;
    this.fontSize = fontSize || 1;
    this.maxWidth = maxWidth || 2000;
    this.fontHeight = fontHeight || 25;
    this.fontColor = 'rgb(0, 0, 0)';
    this.lines = [];
    this.linesY = [];
    
    this.setLines = function(context)
    {
        
        var textLines = this.text.split("/n");
        var y = this.positionY;
        this.linesY.push(y);
        
        for(var i = 0; i < textLines.length; i++)
        {
            var words = textLines[i].split(" ");
            var line = "";
            
            for (var n = 0; n < words.length; n++)
            {
                var testLine = line + words[n] + " ";
                var metrics = context.bufferctx.measureText(testLine);
                var testWidth = metrics.width;

                if (testWidth > this.maxWidth && n > 0) {
                    this.lines.push(line);
                    line = words[n] + " ";
                    y += this.fontHeight;
                    this.linesY.push(y);
                }
                else {
                    line = testLine;
                }
            }
            
            this.lines.push(line);
            y += this.fontHeight;
            this.linesY.push(y);
        }
    };
    
    this.resetText = function(text, context)
    {
        this.text = text;
        this.lines.length = 0;
        this.linesY.length = 0;
        this.setLines(context);
    };
    
    this.setFont = function(context)
    {
        context.bufferctx.font = this.fontSize + 'px Arial';
        context.bufferctx.fillStyle = this.fontColor;
    };
    
    this.setPositionX = function(posX)
    {
        this.positionX = posX;
    };
    
    this.setPositionY = function(posY)
    {
        this.positionY = posY;
    };
    
    this.setPosition = function(posX, posY)
    {
        this.positionX = posX;
        this.positionY = posY;
    };
    
    this.setFontSize = function(fontSize)
    {
        this.fontSize = fontSize;
    };
    
    this.getText = function()
    {
        return this.text;
    };
    
    this.getPositionX = function()
    {
        return this.positionX;
    };
    
    this.getPositionY = function()
    {
        return this.positionY;
    };
    
    this.setColor = function(r, g, b)
    {
        this.fontColor = 'rgb(' + r + ',' + g + ',' + b + ')';
    };
}

//Funciones del Engine
function SkullSound(source, volume, loop)
{
    this.source=source;
    this.volume=volume;
    this.loop=loop;
    this.sound;
    this.finish=false;
    
    this.pause = function()
    {
        this.sound.pause();
    };
    
    this.start = function()
    {
        this.sound = new Audio(this.source);
        this.sound.loop = this.loop;
        this.sound.volume = clamp(this.volume, 0.0, 1.0);
        this.sound.play();
    };
    
    this.stop = function()
    {
        
    };
    
    this.init=function(volume,loop)
    {
        this.finish=false;
        this.volume=volume;
        this.loop=loop;
    };
}

function SkullCharacter(name, width, height)
{
    this.name = name;
    //default text color Black
    this.colorR = 0;
    this.colorG = 0;
    this.colorB = 0;
    
    this.states = [];
    this.paths = [];
    this.sprites = [];
    
    this.enabled = false;
    //current state index
    this.currentState;
    
    this.left = 0;
    this.center = 1;
    this.right = 2;
    
    this.width = width;
    this.height = height;
    
    this.generalProperties = 
    {
        positionX : alignX(this.center, this.width),
        positionY : this.height,
        scaleX : undefined,
        scaleY : undefined,
        scaleAxisAuto : true,
        anchorPointX : 0.5,
        anchorPointY : 1.0,
        rotation : 0
    };
    
    this.addStateSprite = function(state, path)
    {
        this.states.push(state);
        var sprite = new SkullSprite(path);
        sprite.enabled = false;
        sprite.show = false;
        sprite.setPosition(this.generalProperties.positionX, this.generalProperties.positionY);
        if(this.generalProperties.scaleX != undefined)
        {
            sprite.setScaleX(this.generalProperties.scaleX, this.generalProperties.scaleAxisAuto);
        }
        if(this.generalProperties.scaleY != undefined)
        {
            sprite.setScaleY(this.generalProperties.scaleY, this.generalProperties.scaleAxisAuto);
        }
        sprite.setRotation(this.generalProperties.rotation);

        sprite.setAnchorPoint(this.generalProperties.anchorPointX, this.generalProperties.anchorPointY);
        
        this.sprites.push(sprite);
        this.paths.push(path);
    };
    
    this.getSpriteByState = function(state)
    {
        var index = this.states.indexOf(state);
        return this.sprites[index];
    };
    
    this.setState = function(state)
    {
        if(state != undefined)
        {
            if(this.currentState != undefined)
            {
                var index = this.states.indexOf(this.currentState);
                this.sprites[index].enabled = false;
            }
            
            this.currentState = state;
            index = this.states.indexOf(state);
            this.sprites[index].enabled = true;
        }
    };
    
    this.getState = function()
    {
        return this.currentState;
    };
    
    this.setEnable = function(conditional)
    {
        this.enabled = conditional || false;
    };
    
    this.showCharacter = function()
    {
        this.enabled = true;
        for(var i = 0; i < this.sprites.length; i++)
        {
            this.sprites[i].show = true;
        }
    };
    
    this.hideCharacter = function()
    {
        this.enabled = false;
        for(var i = 0; i < this.sprites.length; i++)
        {
            this.sprites[i].show = false;
        }
    };
    
    this.setTextColor = function(r, g, b)
    {
        this.colorR = r;
        this.colorG = g;
        this.colorB = b;
    };
    
    this.setPositionX = function(posX)
    {
        if(this.currentState != undefined)
        {
            var index = this.states.indexOf(this.currentState);
            this.sprites[index].setPositionX(posX);
        }
    };
}

function SkullDialog()
{
    this.dialogCounter = 0;
    this.currentIndex = -1;
    this.currentChangesIndex = -1;
    //who says what
    this.character = [];
    this.dialog = [];
    //what shows where and how
    this.state = [];
    this.backgrounds = [];
    this.backgroundSprites = [];
    this.bgHidden = [];
    
    this.characterIndex = 0;
    this.stateIndex = 1;
    this.detailIndex = 2;
    
    this.addDialog = function(character, dialog)
    {
        this.currentIndex++;
        //reset changes index
        this.currentChangesIndex = -1;
        this.character.push(character);
        this.dialog.push(dialog);
        
        this.backgrounds.push(this.backgrounds[this.currentIndex-1]);
        this.bgHidden.push(this.bgHidden[this.currentIndex-1]);
    };
    
    this.setBackground = function(background)
    {
        if(this.backgrounds[this.currentIndex-1] != undefined)
        {
            this.backgrounds[this.currentIndex-1].enabled = false;
        }
        
        this.backgrounds[this.currentIndex] = background;
    };
    
    this.setBackgroundEx = function(index)
    {
        this.backgrounds[this.currentIndex] = index;
    };
    
    this.hideBackground = function()
    {
        this.bgHidden[this.currentIndex] = true;
    };
    
    this.showBackground = function()
    {
        this.bgHidden[this.currentIndex] = false;
    };
    
    this.changeStates = function(character, state, detail)
    {
        //if initiated dialog index
        if(this.currentIndex > -1)
        {
            //if not initiated change index
            if(this.currentChangesIndex == -1)
            {
                this.state[this.currentIndex] = [];
            }
            
            this.currentChangesIndex++;
            this.state[this.currentIndex][this.currentChangesIndex] = [];
            this.state[this.currentIndex][this.currentChangesIndex][this.characterIndex] = character;
            this.state[this.currentIndex][this.currentChangesIndex][this.stateIndex] = state;
            this.state[this.currentIndex][this.currentChangesIndex][this.detailIndex] = detail;
        }
    };
    
    this.update = function()
    {
        if(this.backgrounds[this.dialogCounter] != undefined)
        {
            if(this.backgrounds[this.dialogCounter-1] != undefined)
                this.backgroundSprites[this.backgrounds[this.dialogCounter-1]].enabled = false;
            this.backgroundSprites[this.backgrounds[this.dialogCounter]].enabled = !this.bgHidden[this.dialogCounter];
            /*
            if(this.bgHidden[this.dialogCounter])
            {
                this.backgroundSprites[this.dialogCounter].enabled = false;
            }
            else
            {
                this.backgrounds[this.dialogCounter].enabled = true;
            }
            */
        }
        
        if(this.state[this.dialogCounter] != undefined)
        {
            //for each change in the current dialog
            for(var i = 0; i < this.state[this.dialogCounter].length; i++)
            {
                if(this.state[this.dialogCounter][i][this.stateIndex] == "positionX")
                {
                    this.state[this.dialogCounter][i][this.characterIndex].setPositionX(this.state[this.dialogCounter][i][this.detailIndex]);
                }
                else if(this.state[this.dialogCounter][i][this.stateIndex] == "hide")
                {
                    this.state[this.dialogCounter][i][this.characterIndex].hideCharacter();
                }
                else if(this.state[this.dialogCounter][i][this.stateIndex] == "show")
                {
                    this.state[this.dialogCounter][i][this.characterIndex].showCharacter();
                }
                else if(this.state[this.dialogCounter][i][this.stateIndex] == "state")
                {
                    this.state[this.dialogCounter][i][this.characterIndex].setState(this.state[this.dialogCounter][i][this.detailIndex]);
                }
            }
        }
    };
    
    this.nextDialog = function()
    {
        this.dialogCounter++;
    };
}

//Generated text box with shapes
function SkullTextbox(x, y, width, height)
{
    this.enabled = true;
    
    //configuration
    this.isNameLabelOn = false;
    this.isIconOn = false;
    this.colorR = 0;
    this.colorG = 0;
    this.colorB = 0;
    this.opacity;
    this.width = width;
    this.height = height;
    this.positionX = x;
    this.positionY = y;
    
    //text box
    this.fontSize = 12;
    this.textPositionX = 0;
    this.textPositionY = 0;
    this.maxWidth = 100;
    this.fontHeight = 10;
    
    //label box
    this.labelFontSize = 12;
    this.labelPositionX = 0;
    this.labelPositionY = 0;
    this.labelWidth = 150;
    this.labelHeight = 50;
    
    //icon
    this.iconPositionX = 0;
    this.iconPositionY = 0;
    this.iconScale = 0;
    
    this.hide = function()
    {
        this.enabled = false;
    };
    
    this.show = function()
    {
        this.enabled = true;
    };
    
    this.enableLabel = function()
    {
        this.isNameLabelOn = true;
    };
    
    this.setLabelProperties = function(fontSize, x, y, w, h)
    {
        this.labelFontSize = fontSize;
        this.labelPositionX = x;
        this.labelPositionY = y;
        this.labelWidth = w;
        this.labelHeight = h;
    };
    
    this.setIconProperties = function(x, y, scale)
    {
        this.iconPositionX = x;
        this.iconPositionY = y;
        this.iconScale = scale;
    };
    
    this.enableIcon = function()
    {
        this.isIconOn = true;
    };
    
    //opacity from 0.0 to 1.0
    this.setColor = function(r, g, b, opacity)
    {
        this.colorR = r;
        this.colorG = g;
        this.colorB = b;
        this.opacity = clamp(opacity, 0.0, 1.0);
    };
    
    this.setTextProperties = function(fontSize, x, y, maxWidth, fontHeight)
    {
        this.fontSize = fontSize;
        this.textPositionX = x;
        this.textPositionY = y;
        this.maxWidth = maxWidth;
        this.fontHeight = fontHeight;
    };
    
    this.createSimpleTextbox = function(context)
    {
        if(this.enabed)
        {
            context.fillStyle = "rgba(" + this.colorR + "," + this.colorG + "," + this.colorB + "," + this.opacity+")";
            context.fillRect(this.positionX, this.positionY, this.width, this.height);
            context.lineWidth = 2;
            context.strokeStyle = "rgba(" + (this.colorR - 50)+ "," + (this.colorG - 50) + "," + (this.colorB - 50) + "," + this.opacity+")";
            context.strokeRect(this.positionX, this.positionY, this.width, this.height);

            if(this.isNameLabelOn)
            {
                context.fillStyle = "rgba(" + this.colorR + "," + this.colorG + "," + this.colorB + "," + this.opacity+")";
                context.fillRect(this.labelPositionX, this.labelPositionY, this.labelWidth, this.labelHeight);
            }
        }
    };
}

//Custom text box
function SkullCustomTextbox()
{
    this.isNameLabelOn = false;
    this.isIconOn = false;
}

function SkullScene(width, height)
{
    this.characters = [];
    
    this.backgrounds = [];
    this.backgroundKeyword = [];
    this.currentBackground;
    
    this.textBox;
    
    this.sprites = [];
    
    this.children = [];
    
    this.left = 0;
    this.center = 1;
    this.right = 2;
    
    this.width = width;
    this.height = height;
    
    this.addTextBox = function(textbox)
    {
        this.textbox = textbox;
        this.children.push(textbox);
    };
    
    this.addCharacter = function(character)
    {
        //character.generalProperties.positionX = alignX(this.center, this.width);
        //character.generalProperties.positionY = this.height;
        this.characters.push(character);
        //this.characters[this.characters.length - 1].generalProperties.positionX = alignX(this.center, this.width);
       // this.characters[this.characters.length - 1].generalProperties.positionY = this.height;
    };
    
    this.addBackground = function(keyword, path)
    {
        if(keyword != undefined && path != undefined)
        {
            this.backgroundKeyword.push(keyword);
            var sprite = new SkullSprite(path);
            sprite.setScaleX(this.width, true);
            sprite.enabled = false;
            this.backgrounds.push(sprite);
        }
    };
    
    this.addChild = function(child)
    {
        this.children.push(child);
    };
    
    this.removeChild = function(child)
    {
        var index = this.children.indexOf(child);
        this.children.splice(index, 1);
    };
    
    this.setBackground = function(keyword)
    {
        for(var i = 0; i < this.backgrounds.length; i++)
        {
            this.backgrounds[i].enabled = false;
        }
        
        var index = this.backgroundKeyword.indexOf(keyword);
        this.backgrounds[index].enabled = true;
    };
    
    this.startScene = function()
    {
        for(var i = 0; i < this.backgrounds.length; i++)
        {
            this.addChild(this.backgrounds[i]);
        }
        
        for(var i = 0; i < this.characters.length; i++)
        {
            for(var j = 0; j < this.characters[i].sprites.length; j++)
            {
                this.addChild(this.characters[i].sprites[j]);
            }
        }
    };
}

window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();

function SkullEngine(fps, width, height)
{
    this.canvas;
    this.ctx;
    this.buffer;
    this.bufferctx;
    this.gameloop;
    this.fps = fps;
    this.helloWorld;
    this.width = width;
    this.height = height;
    this.helloWorldText;
    
    this.left = 0;
    this.center = 1;
    this.right = 2;
    
    this.children = [];
    
    this.currentScene;
    
    this.update = function()
    {
        
    };
    
    this.render = function()
    {
        var self = this;
        
        this.bufferctx.clearRect(0, 0, this.width, this.height);
        this.ctx.clearRect(0, 0, this.width, this.height);
        
        for(var i = 0; i < this.children.length; i++)
        {
            if(this.children[i] instanceof SkullSprite)
            {
                if(this.children[i].enabled && this.children[i].show)
                {
                    this.bufferctx.translate(this.children[i].getPositionX(), this.children[i].getPositionY());
                    this.bufferctx.rotate(this.children[i].rotateAngle * (Math.PI/180));
                    this.bufferctx.drawImage(this.children[i].getSprite(), -this.children[i].getTranslateX(), -this.children[i].getTranslateY(), this.children[i].getScaleX(), this.children[i].getScaleY());
                    this.bufferctx.rotate(-this.children[i].rotateAngle * (Math.PI/180));
                    this.bufferctx.translate(-this.children[i].getPositionX(), -this.children[i].getPositionY());
                }
            }
            else if(this.children[i] instanceof SkullText)
            {
                this.children[i].setFont(this);
                this.bufferctx.fillText(this.children[i].getText(), this.children[i].getPositionX(), this.children[i].getPositionY());
            }
        }
        if(this.currentScene != undefined)
        {
            for(var i = 0; i < this.currentScene.children.length; i++)
            {
                if(this.currentScene.children[i] instanceof SkullSprite)
                {
                   if(this.currentScene.children[i].enabled && this.currentScene.children[i].show)
                   {
                        this.bufferctx.translate(this.currentScene.children[i].getPositionX(), this.currentScene.children[i].getPositionY());
                        this.bufferctx.rotate(this.currentScene.children[i].rotateAngle * (Math.PI/180));
                        this.bufferctx.drawImage(this.currentScene.children[i].getSprite(), -this.currentScene.children[i].getTranslateX(), -this.currentScene.children[i].getTranslateY(), this.currentScene.children[i].getScaleX(), this.currentScene.children[i].getScaleY());
                        this.bufferctx.rotate(-this.currentScene.children[i].rotateAngle * (Math.PI/180));
                        this.bufferctx.translate(-this.currentScene.children[i].getPositionX(), -this.currentScene.children[i].getPositionY());
                   }
                }
                else if(this.currentScene.children[i] instanceof SkullText)
                {
                    this.currentScene.children[i].setFont(this);
                    
                    for(var j = 0; j < this.currentScene.children[i].lines.length; j++)
                    {
                        this.bufferctx.fillText(this.currentScene.children[i].lines[j], this.currentScene.children[i].getPositionX(), this.currentScene.children[i].linesY[j]);
                    }
                }
                else if(this.currentScene.children[i] instanceof SkullTextbox)
                {
                    //this.currentScene.children[i].createSimpleTextbox(this.bufferctx);
                    if(this.currentScene.children[i].enabled)
                    {
                        var prevFillstyle = this.bufferctx.fillStyle;
                        this.bufferctx.fillStyle = "rgba(" + this.currentScene.children[i].colorR + "," + this.currentScene.children[i].colorG + "," + this.currentScene.children[i].colorB + "," + this.currentScene.children[i].opacity+")";
                        this.bufferctx.fillRect(this.currentScene.children[i].positionX, this.currentScene.children[i].positionY, this.currentScene.children[i].width, this.currentScene.children[i].height);
                        this.bufferctx.lineWidth = 2;
                        this.bufferctx.strokeStyle = "rgba(" + clamp(this.currentScene.children[i].colorR - 50, 0, 255)+ "," + clamp(this.currentScene.children[i].colorG - 50, 0, 255) + "," + clamp(this.currentScene.children[i].colorB - 50, 0, 255) + "," + clamp(this.currentScene.children[i].opacity + 0.2, 0.0, 1.0) + ")";
                        this.bufferctx.strokeRect(this.currentScene.children[i].positionX, this.currentScene.children[i].positionY, this.currentScene.children[i].width, this.currentScene.children[i].height);
                        
                        if(this.currentScene.children[i].isNameLabelOn)
                        {
                            this.bufferctx.fillStyle = "rgba(" + this.currentScene.children[i].colorR + "," + this.currentScene.children[i].colorG + "," + this.currentScene.children[i].colorB + "," + this.currentScene.children[i].opacity+")";
                            this.bufferctx.fillRect(this.currentScene.children[i].labelPositionX, this.currentScene.children[i].labelPositionY, this.currentScene.children[i].labelWidth, this.currentScene.children[i].labelHeight);
                            
                            this.bufferctx.strokeStyle = "rgba(" + clamp(this.currentScene.children[i].colorR - 50, 0, 255)+ "," + clamp(this.currentScene.children[i].colorG - 50, 0, 255) + "," + clamp(this.currentScene.children[i].colorB - 50, 0, 255) + "," + clamp(this.currentScene.children[i].opacity + 0.2, 0.0, 1.0) + ")";
                        this.bufferctx.strokeRect(this.currentScene.children[i].labelPositionX, this.currentScene.children[i].labelPositionY, this.currentScene.children[i].labelWidth, this.currentScene.children[i].labelHeight);
                        }
                        
                        this.bufferctx.fillStyle = prevFillstyle;
                    }
                }
            }
        }
        
        this.ctx.drawImage(this.buffer, 0, 0);
    };
    
    this.loop = function()
    {
        this.update();
        this.render();
    };
    
    this.addChild = function(child)
    {
        this.children.push(child);
    };
    
    this.removeChild = function(child)
    {
        var index = this.children.indexOf(child);
        this.children.splice(index, 1);
    };
    
    this.setScene = function(scene)
    {
        this.currentScene = scene;
    };
    
    this.init = function()
    {
        var self = this;
        //Dimensiones de la pantalla
        document.getElementById("canvas").width = this.width;
        document.getElementById("canvas").height = this.height;

        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext("2d");

        //Buffering
        this.buffer = document.createElement('canvas');
        this.buffer.width = this.canvas.width;
        this.buffer.height = this.canvas.height;
        this.bufferctx = this.buffer.getContext('2d');

        //Cargar Recursos
        this.helloWorldText = "Hello World!";
        this.bufferctx.font = '100px Arial';

        //Bucle del Juego
        var anim = function () {
            self.loop();
            requestAnimFrame(anim);
        };
        anim();
    };
}