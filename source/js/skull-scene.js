function SkullScene(width, height)
{
    this.characters = [];
    
    this.backgrounds = [];
    this.backgroundKeyword = [];
    this.currentBackground;
    
    this.sprites = [];
    
    this.children = [];
    
    this.left = 0;
    this.center = 1;
    this.right = 2;
    
    this.width = width;
    this.height = height;
    
    this.addCharacter = function(character)
    {
        //character.generalProperties.positionX = alignX(this.center, this.width);
        //character.generalProperties.positionY = this.height;
        this.characters.push(character);
        this.characters[this.characters.length - 1].generalProperties.positionX = alignX(this.center, this.width);
        this.characters[this.characters.length - 1].generalProperties.positionY = this.height;
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