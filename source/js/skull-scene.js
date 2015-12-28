function SkullScene()
{
    this.characters = [];
    this.backgrounds = [];
    
    this.sprites = [];
    
    this.children = [];
    
    this.addCharacter = function(character)
    {
        this.characters.push(character);
    };
    
    this.addBackground = function(background)
    {
        this.backgrounds.push(background);
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
    
    this.startScene = function()
    {
        for(var i = 0; i < this.characters.length; i++)
        {
            for(var j = 0; j < this.characters[i].paths.length; j++)
            {
                var sprite = new SkullSprite(this.characters[i].paths[j]);
                sprite.enabled = false;
                sprite.setPosition(this.characters[i].generalProperties.positionX, this.characters[i].generalProperties.positionY);
                if(this.characters[i].generalProperties.scaleX != undefined)
                {
                    sprite.setScaleX(this.characters[i].generalProperties.scaleX, this.characters[i].generalProperties.scaleAxisAuto);
                }
                if(this.characters[i].generalProperties.scaleY != undefined)
                {
                    sprite.setScaleY(this.characters[i].generalProperties.scaleY, this.characters[i].generalProperties.scaleAxisAuto);
                }
                sprite.setRotation(this.characters[i].generalProperties.rotation);
                
                sprite.setAnchorPoint(this.characters[i].generalProperties.anchorPointX, this.characters[i].generalProperties.anchorPointY);
                
                if(this.characters[i].enabled)
                {
                    if(this.characters[i].currentState == this.characters[i].states[j])
                    {
                        sprite.enabled = true;
                    }
                }
                
                this.sprites.push(sprite);
            }
        }
        
        for(var i = 0; i < this.sprites.length; i++)
        {
            if(this.sprites[i].enabled)
            {
                this.addChild(this.sprites[i]);
            }
        }
    };
}