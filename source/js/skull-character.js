function SkullCharacter(name)
{
    this.name = name;
    
    this.states = [];
    this.paths = [];
    this.sprites = [];
    
    this.enabled = false;
    //current state index
    this.currentState;
    
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
    
    this.setConfiguration = function()
    {
    };
}