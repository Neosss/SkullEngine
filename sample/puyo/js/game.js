var game = new SkullEngine(60, 800, 600);
game.init();

var puyoScene = new SkullScene(game.width, game.height);
game.setScene(puyoScene);

var p1Frame = new SkullSprite("images/puyo/p1Frame.png");
p1Frame.setAnchorPoint(0.5, 0.5);
p1Frame.setPosition(game.width / 4, game.height / 2);

var p2Frame = new SkullSprite("images/puyo/p2Frame.png");
p2Frame.setAnchorPoint(0.5, 0.5);
p2Frame.setPosition((game.width / 4) * 3, game.height / 2);

var puyoBG = new SkullSprite("images/puyo/puyoBG.jpg");
puyoBG.setAnchorPoint(0.5, 0.5);
puyoBG.setPosition(game.width / 2, game.height / 2);
puyoBG.setScaleX(game.width, true);

puyoScene.addChild(puyoBG);
puyoScene.addChild(p1Frame);
puyoScene.addChild(p2Frame);

var isButtonPressed = [];
for(var i = 0; i < 12; i++)
{
    isButtonPressed[i] = false;
}

var GRID_ROW = 14 * 2;
var GRID_COLUNM = 6;

//var blockType = ["blank", "red", "blue", "green", "gray"];

var BLOCK_BLANK = 0;
var BLOCK_RED = 1;
var BLOCK_BLUE = 2;
var BLOCK_GREEN = 3;

//player1 grid
var p1Grid = [];
var p1PuyoCounter = 0;
var p1ControllingBlock1 = [0, 0];
var p1ControllingBlock2 = [0, 0];

//player2 grid
var p2Grid = [];
var p2PuyoCounter = 0;

//incoming puyos
var puyos = [];

var getRandom = function(min, max)
{
    //random int between min and max (including max)
    //REF. Mozilla
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//create grid 6 x 12 blocks
var createGrid = function(grid)
{
    for(var i = 0; i < GRID_ROW; i++)
    {
        grid[i] = [];
        for(var j = 0; j < GRID_COLUNM; j++)
        {
            grid[i][j] = 0;
        }
    }
}

//generate next set of puyos
var generatePuyo = function(puyoList)
{
    for(var i = 0; i < 200; i++)
    {
        puyoList[i] = getRandom(1, 3);
    }
}

var init = function()
{
    createGrid(p1Grid);
    createGrid(p2Grid);
    generatePuyo(puyos);
}

var spawnBlocks = function(first, second, grid)
{
    grid[2][3] = first;
    grid[3][3] = first;
    grid[0][3] = second;
    grid[1][3] = second;
    
    p1ControllingBlock1[0] = 3;
    p1ControllingBlock1[1] = 3;
    
    p1ControllingBlock2[0] = 1;
    p1ControllingBlock2[0] = 3;
}

spawnBlocks(0, 1, p1Grid);

init();

var fpsForDrop = 0;
//0.5 secs
var fallSpeedFPS = 30;

game.update = function()
{   
    fpsForDrop++;

    if(fpsForDrop >= fallSpeedFPS)
    {
        //drop first controlling block
        if(grid[p1ControllingBlock1[0]][p1ControllingBlock1[1]] != 0)
        {
            if(grid[p1ControllingBlock1[0] + 1][p1ControllingBlock1[1]] == 0)
            {
                grid[p1ControllingBlock1[0] + 1][p1ControllingBlock1[1]] = grid[p1ControllingBlock1[0]][p1ControllingBlock1[1]];
                
                //grid[p1ControllingBlock1[0] + 1][p1ControllingBlock1[1]] = grid[p1ControllingBlock1[0]][p1ControllingBlock1[1]];
                
                grid[p1ControllingBlock1[0] - 1][p1ControllingBlock1[1]] = 0;
            }
            
        }
        
        
        //drop second controlling block
        if(grid[p1ControllingBlock2[0]][p1ControllingBlock2[1]] != 0)
        {
            if(grid[p1ControllingBlock2[0] + 1][p1ControllingBlock2[1]] == 0)
            {
                grid[p1ControllingBlock2[0] + 1][p1ControllingBlock2[1]] = grid[p1ControllingBlock2[0]][p1ControllingBlock2[1]];
                
                grid[p1ControllingBlock2[0] - 1][p1ControllingBlock2[1]] = 0;
            }
        }
        
        /*
        for(var i = 0; i < GRID_ROW; i++)
        {
            for(var j = 0; j < GRID_COLUNM; j++)
            {
                if(grid[i][j] != 0)
                {
                    if(i != GRID_ROW)
                    {
                        
                    }
                }
            }
        }
        */
        
        fpsForDrop = 0;
    }
    
    
    //--------------------------------------------------
    // CONTROLS
    //--------------------------------------------------
    
    //p1-----------------------------------------
    
    if(isButtonPressed[0]) //W
    {
       
    }
    if(isButtonPressed[1]) //S
    {
       
    }
    if(isButtonPressed[2]) //A
    {
       
    }
    if(isButtonPressed[3]) //D
    {
       
    }
    if(isButtonPressed[4]) //F
    {
       
    }
    if(isButtonPressed[5]) //G
    {
       
    }
    
    //p2------------------------------------------
    
    if(isButtonPressed[6]) //UP
    {
       
    }
    if(isButtonPressed[7]) //DOWN
    {
       
    }
    if(isButtonPressed[8]) //LEFT
    {
       
    }
    if(isButtonPressed[9]) //RIGHT
    {
       
    }
    if(isButtonPressed[10]) //O
    {
       
    }
    if(isButtonPressed[11]) //P
    {
       
    }
    
}

var eventHandler = new Input();
eventHandler.keyDownHandler = function(e)
{
    if(e.keyCode == eventHandler.keycode.SPACE || e.keyCode == eventHandler.keycode.ENTER)
    {
            
    }
    
    if(e.keyCode == eventHandler.keycode.W)
    {
        isButtonPressed[0] = true;
    }
    
    if(e.keyCode == eventHandler.keycode.S)
    {
        isButtonPressed[1] = true;
    }
    
    if(e.keyCode == eventHandler.keycode.A)
    {
        isButtonPressed[2] = true;
    }
    
    if(e.keyCode == eventHandler.keycode.D)
    {
        isButtonPressed[3] = true;
    }
    
    if(e.keyCode == eventHandler.keycode.F)
    {
        isButtonPressed[4] = true;
    }
    
    if(e.keyCode == eventHandler.keycode.G)
    {
        isButtonPressed[5] = true;
    }
    
    if(e.keyCode == eventHandler.keycode.UP)
    {
        isButtonPressed[6] = true;
    }
    if(e.keyCode == eventHandler.keycode.DOWN)
    {
        isButtonPressed[7] = true;
    }
    
    if(e.keyCode == eventHandler.keycode.LEFT)
    {
        isButtonPressed[8] = true;
    }
    
    if(e.keyCode == eventHandler.keycode.RIGHT)
    {
        isButtonPressed[9] = true;
    }
    
    if(e.keyCode == eventHandler.keycode.O)
    {
        isButtonPressed[10] = true;
    }
    
    if(e.keyCode == eventHandler.keycode.P)
    {
        isButtonPressed[11] = true;
    }
    
};

eventHandler.keyUpHandler = function(e)
{
    if(e.keyCode == eventHandler.keycode.W)
    {
        isButtonPressed[0] = false;
    }
    
    if(e.keyCode == eventHandler.keycode.S)
    {
        isButtonPressed[1] = false;
    }
    
    if(e.keyCode == eventHandler.keycode.A)
    {
        isButtonPressed[2] = false;
    }
    
    if(e.keyCode == eventHandler.keycode.D)
    {
        isButtonPressed[3] = false;
    }
    
    if(e.keyCode == eventHandler.keycode.UP)
    {
        isButtonPressed[4] = false;
    }
    if(e.keyCode == eventHandler.keycode.DOWN)
    {
        isButtonPressed[5] = false;
    }
    
    if(e.keyCode == eventHandler.keycode.LEFT)
    {
        isButtonPressed[6] = false;
    }
    if(e.keyCode == eventHandler.keycode.RIGHT)
    {
        isButtonPressed[7] = false;
    }
};

eventHandler.mouseDown = function(e)
{
    var canvasX = game.canvas.getBoundingClientRect().left;
    var canvasY = game.canvas.getBoundingClientRect().top;
    if(e.pageX > canvasX && e.pageX < canvasX + game.width && e.pageY > canvasY && e.pageY < canvasY + game.height)
    {
         
    }
    
};

eventHandler.addKeyboardEvents();
eventHandler.addMouseEvents();