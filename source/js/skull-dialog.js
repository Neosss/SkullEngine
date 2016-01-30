function SkullDialog()
{
    this.dialogCounter = 0;
    //who says
    this.character = [];
    //what
    this.dialog = [];
    //------
    this.state = [];
    
    this.addDialog = function(character, dialog)
    {
        this.character.push(character);
        this.dialog.push(dialog);
    };
    
    this.changeStates = function(character, action, detail)
    {
        
    };
    
    this.nextDialog = function()
    {
        this.dialogCounter++;
    };
}