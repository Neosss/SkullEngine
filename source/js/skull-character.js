function SkullCharacter(name)
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
    
    this.generalProperties = 
    {
        positionX : 0,
        positionY : 0,
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
        this.paths.push(path);
    };
    
    this.getSpritePathByState = function(state)
    {
        var index = this.states.indexOf(state);
        return this.paths[index];
    };
    
    this.setState = function(state)
    {
        this.currentState = state;
    };
    
    this.getState = function()
    {
        return this.currentState;
    };
    
    this.setEnable = function(conditional)
    {
        this.enabled = conditional || false;
    };
    
    this.setTextColor = function(r, g, b)
    {
        this.colorR = r;
        this.colorG = g;
        this.colorB = b;
    };
    
    this.setConfiguration = function()
    {
    };
}