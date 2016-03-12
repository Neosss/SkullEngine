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