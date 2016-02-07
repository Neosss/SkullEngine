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
        //for each change in the current dialog
        for(var i = 0; i < this.state[this.currentIndex].length; i++)
        {
            if(this.state[this.currentIndex][i][this.stateIndex] == "positionX")
            {
                this.state[this.currentIndex][i][this.characterIndex].setPositionX(this.state[this.currentIndex][i][this.detailIndex]);
            }
        }
    };
    
    this.nextDialog = function()
    {
        this.dialogCounter++;
    };
}