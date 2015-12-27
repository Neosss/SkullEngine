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