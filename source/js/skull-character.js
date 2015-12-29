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
}