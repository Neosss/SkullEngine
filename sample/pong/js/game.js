var game = new SkullEngine(60, 800, 600);
game.init();

var pongScene = new SkullScene(game.width, game.height);
game.setScene(pongScene);

var paddleP1 = new SkullSprite("images/pong/paddle.png");
paddleP1.setAnchorPoint(0.5, 0.5);
paddleP1.setPositionX(16);
paddleP1.setPositionY(game.height/2);

var paddleP2 = new SkullSprite("images/pong/paddle.png");
paddleP2.setAnchorPoint(0.5, 0.5);
paddleP2.setPositionX(game.width - 16);
paddleP2.setPositionY(game.height/2);

var ball = new SkullSprite("images/pong/ball.png");
ball.setAnchorPoint(0.5, 0.5);
var randSide = getRandom(0, 1);
if(randSide == 0)
{
    ball.setPosition((game.width/4) * 3, game.height/2);
}
else
{
    ball.setPosition(game.width/4, game.height/2);
}

var ballEffect = new SkullSprite("images/pong/ballSuper.png");
ballEffect.setAnchorPoint(0.5, 0.5);
ballEffect.setPosition(ball.getPositionX(), ball.getPositionY());
ballEffect.setScale(80, 80);
ballEffect.show = false;

var pongBG = new SkullSprite("images/pong/pong-bg.jpg");
pongBG.setPosition(game.width/2, game.height/2);
pongBG.setScale(game.width, game.height);
pongBG.setAnchorPoint(0.5, 0.5);

pongScene.addChild(pongBG);
pongScene.addChild(paddleP1);
pongScene.addChild(paddleP2);
pongScene.addChild(ball);
pongScene.addChild(ballEffect);

var isWPressed = false;
var isSPressed = false;
var isUpPressed = false;
var isDownPressed = false;

var paddleSpeedP1 = 5;
var paddleSpeedP2 = 5;
var ballSpeedX = 6;
if(randSide == 0)
{
    ballSpeedX *= -1;
}

var ballSpeedY = 6;
var baseBallSpeed = 6;

var p1Score = 0;
var p2Score = 0;

var p1Level = 0;
var p2Level = 0;

var p1ScoreText = new SkullText(p1Score.toString(), 40);
p1ScoreText.setPosition((game.width / 2) - 100, 60);
p1ScoreText.setColor(255, 255, 255);
p1ScoreText.maxWidth = 480;
p1ScoreText.fontHeight = 30;
p1ScoreText.setLines(game);
pongScene.addChild(p1ScoreText);

var p2ScoreText = new SkullText(p2Score.toString(), 40);
p2ScoreText.setPosition((game.width / 2) + 80, 60);
p2ScoreText.setColor(255, 255, 255);
p2ScoreText.maxWidth = 480;
p2ScoreText.fontHeight = 30;
p2ScoreText.setLines(game);
pongScene.addChild(p2ScoreText);

var tmpText = "Lv:" + p1Level.toString();
var p1LevelText = new SkullText(tmpText, 30);
p1LevelText.setPosition(60, game.height - 50);
p1LevelText.setColor(255, 255, 255);
p1LevelText.maxWidth = 400;
p1LevelText.fontHeight = 30;
p1LevelText.setLines(game);
pongScene.addChild(p1LevelText);

tmpText = "Lv:" + p2Level.toString();
var p2LevelText = new SkullText(tmpText, 30);
p2LevelText.setPosition(game.width - 150, game.height - 50);
p2LevelText.setColor(255, 255, 255);
p2LevelText.maxWidth = 400;
p2LevelText.fontHeight = 30;
p2LevelText.setLines(game);
pongScene.addChild(p2LevelText);

var gameTimer = 0;

var lastPlayerToTouch = 0;

var effectDuration = 120;
var timeForActivation = 180;
var tmpTimeStamp = 0;
var actPowerUpNum = 0;
var actPowerUp;
var isSuperActiveP1 = false;
var isSuperActiveP2 = false;
var isPU = false;
var isPUActive = false;
var superTimer = 0;
var delayTimer = 0;
var ballMiddle = true;
var superDuration = 80;
var gravityX = 0;
var timeDelationCounterP1 = 0;
var timeDelationCounterP2 = 0;

var powerUpList = ["images/pong/longPU.png", "images/pong/speedPU.png", "images/pong/superPU.png", "images/pong/timePU.png", "images/pong/gravityPU.png"];

var createPowerUp = function()
{
    isPU = true;
    actPowerUpNum = getRandom(0, 4);
    actPowerUp = new SkullSprite(powerUpList[actPowerUpNum]);
    actPowerUp.setAnchorPoint(0.5, 0.5);
    actPowerUp.setPosition(game.width/2, 35);
    actPowerUp.setScale(75, 75);
    pongScene.addChild(actPowerUp);
    tmpTimeStamp = gameTimer;
}

var activatePowerUp = function()
{
    isPUActive = true;
    actPowerUp.setScale(50, 50);
}

var applyEffect = function(playerNum)
{
    //powerUp to player 1
    if(playerNum == 1)
    {
        //0 = enlarge paddle
        if(actPowerUpNum == 0)
        {
            paddleP1.setScaleY(paddleP1.getScaleY() + 20);
            p1Level++;
            p1LevelText.resetText("Lv:" + p1Level.toString(), game);
        }
        //1 = speed up
        else if(actPowerUpNum == 1)
        {
            paddleSpeedP1 += 3;
            p1Level++;
            p1LevelText.resetText("Lv:" + p1Level.toString(), game);
        }
        //2 = super power
        else if(actPowerUpNum == 2)
        {
            isSuperActiveP1 = true;
            superTimer = 0;
        }
        //3 = time delation
        else if(actPowerUpNum == 3)
        {
            paddleSpeedP2 -= (1 + (1 * (p2Level / 2)));
            paddleP2.setScaleY(paddleP2.getScaleY() - 20);
            timeDelationCounterP2++;
        }
        //4 = gravity control
        else if(actPowerUpNum == 4)
        {
            gravityX += 2;
        }
    }
    
    //powerUp to player 2
    else if(playerNum == 2)
    {
        //0 = enlarge paddle
        if(actPowerUpNum == 0)
        {
            paddleP2.setScaleY(paddleP1.getScaleY() + 20);
            p2Level++;
            p2LevelText.resetText("Lv:" + p2Level.toString(), game);
        }
        //1 = speed up
        else if(actPowerUpNum == 1)
        {
            paddleSpeedP2 += 3;
            p2Level++;
            p2LevelText.resetText("Lv:" + p2Level.toString(), game);
        }
        //2 = super power
        else if(actPowerUpNum == 2)
        {
            isSuperActiveP2 = true;
            superTimer = 0;
        }
        
        //3 = time delation
        else if(actPowerUpNum == 3)
        {
            paddleSpeedP1 -= (1 + (1 * (p1Level / 2)));
            paddleP1.setScaleY(paddleP1.getScaleY() - 20);
            timeDelationCounterP1++;
        }
        //4 = gravity control
        else if(actPowerUpNum == 4)
        {
            gravityX -= 2;
        }
        
    }
}

var afterPointReset = function()
{
    for(var i = 0; i < timeDelationCounterP1; i++)
    {
        paddleSpeedP1 += (1 + (1 * (p1Level / 2)));
        paddleP1.setScaleY(paddleP1.getScaleY() + 20);
    }
    
    for(var i = 0; i < timeDelationCounterP2; i++)
    {
        paddleSpeedP2 += (1 + (1 * (p2Level / 2)));
        paddleP2.setScaleY(paddleP2.getScaleY() + 20);
    }
    
    if(gravityX > 0)
        gravityX--;
    else if(gravityX < 0)
        gravityX++;
    
    timeDelationCounterP1 = 0;
    timeDelationCounterP2 = 0;
}

game.update = function()
{
    gameTimer++;
    
    if(ballMiddle)
    {
        delayTimer++;    
    }
    
    if(delayTimer >= 120)
    {
        ballMiddle = false;
    }
    
    
    
    if(!ballMiddle)
    {
        if(gameTimer % 350 == 0)
        {
            if(!isPU)
            {
                createPowerUp();
            }

            baseBallSpeed += 0.5;
        }
        
        if(isPU)
        {
            if(!isPUActive)
            {
                actPowerUp.setPositionY(actPowerUp.getPositionY() + (((game.height/2) - 35) / timeForActivation));
            }
        }

        if(tmpTimeStamp != 0)
        {
            if(gameTimer - tmpTimeStamp >= timeForActivation)
            {
                activatePowerUp();
            }
        }
        
        if(superTimer >= superDuration)
        {
            if(isSuperActiveP1)
            {
                isSuperActiveP1 = false;
            }
            else
            {
                isSuperActiveP2 = false;
            }
        }

        if(isPUActive)
        {
            if(actPowerUp.enabled)
            {
                //powerUp and ball collision detection
                if(actPowerUp.collidesWithRect(ball.getRect()))
                {
                    pongScene.removeChild(actPowerUp);
                    applyEffect(lastPlayerToTouch);
                    actPowerUp.enabled = false;
                    isPUActive = false;
                    isPU = false;
                    tmpTimeStamp = 0;
                }
            }
        }

        //ball movement update
        ball.setPositionX(ball.getPositionX() + ballSpeedX + gravityX);
        if(ballSpeedY > 0)
        {
            ball.setPositionY(ball.getPositionY() + ballSpeedY + gravityX);
        }
        else
        {
            ball.setPositionY(ball.getPositionY() + ballSpeedY - gravityX);
        }
        

        if(ball.getPositionX() >= game.width)
        {
            if(isPU)
            {
                if(actPowerUp.enabled)
                {
                    pongScene.removeChild(actPowerUp);
                    actPowerUp.enabled = false;
                    isPUActive = false;
                    isPU = false;
                    tmpTimeStamp = 0;
                }
            }
            
            ball.setPosition((game.width/4) * 3, game.height/2);
            ballMiddle = true;
            delayTimer = 0;
            
            p1Score++;
            p1ScoreText.resetText(p1Score.toString(), game);
            ballSpeedX *= -1;
            baseBallSpeed = 6;
            
            afterPointReset();
        }
        else if(ball.getPositionX() <= 0)
        {
            if(isPU)
            {
                if(actPowerUp.enabled)
                {
                    pongScene.removeChild(actPowerUp);
                    actPowerUp.enabled = false;
                    isPUActive = false;
                    isPU = false;
                    tmpTimeStamp = 0;
                }
            }
            
            ball.setPosition(game.width/4, game.height/2);
            ballMiddle = true;
            delayTimer = 0;
            
            p2Score++;
            p2ScoreText.resetText(p2Score.toString(), game);
            ballSpeedX *= -1;
            baseBallSpeed = 6;
            
            afterPointReset();
        }

        if(ball.getPositionY() >= game.height)
        {
            ballSpeedY *= -1;    
        }
        else if(ball.getPositionY() <= 0)
        {
            ballSpeedY *= -1;    
        }

        //ball and paddle collision
        if(ball.getPositionX() >= paddleP2.getPositionX() - paddleP2.getScaleX() / 2 && ball.getPositionY() >= paddleP2.getPositionY() - paddleP2.getScaleY() / 2 && ball.getPositionY() <= paddleP2.getPositionY() + paddleP2.getScaleY() / 2)
        {
            lastPlayerToTouch = 2;
            if(ballSpeedX > 0)
            {
                ballSpeedX *= -1;
            }
        }
        else if(ball.getPositionX() <= paddleP1.getPositionX() + paddleP1.getScaleX() / 2 && ball.getPositionY() >= paddleP1.getPositionY() - paddleP2.getScaleY() / 2 && ball.getPositionY() <= paddleP1.getPositionY() + paddleP2.getScaleY() / 2)
        {
            lastPlayerToTouch = 1;
            if(ballSpeedX < 0)
            {
                ballSpeedX *= -1;
            }
        }

        if(isSuperActiveP1)
        {
            superDuration = 80 + p1Level * 2.0;
            ballEffect.setPosition(ball.getPositionX(), ball.getPositionY());
            ballEffect.setRotation(180);
            
            
            superTimer++;
            if(ballSpeedX > 0)
            {
                ballEffect.setScale(80 + p1Level * 5, 80 + p1Level * 10);
                ballSpeedX = baseBallSpeed + 5 + p1Level * 1.5;
                ballEffect.show = true;
            }
            else
            {
                ballSpeedX = -baseBallSpeed;
                ballEffect.show = false;
            }
        }

        if(isSuperActiveP2)
        {
            superDuration = 80 + p2Level * 2.0;
            ballEffect.setPosition(ball.getPositionX(), ball.getPositionY());
            ballEffect.setRotation(0);
            
            
            superTimer++;
            if(ballSpeedX < 0)
            {
                ballEffect.setScale(80 + p2Level * 5, 80 + p2Level * 10);
                ballSpeedX = -baseBallSpeed - 5 - p2Level * 1.5;
                ballEffect.show = true;
            }
            else
            {
                ballSpeedX = baseBallSpeed;
                ballEffect.show = false;
            }
        }

        if(!isSuperActiveP1 && !isSuperActiveP2)
        {
            if(ballSpeedX > 0)
            {
                ballSpeedX = baseBallSpeed;
                
            }
            else
            {
                ballSpeedX = -baseBallSpeed;
            }
            
            if(ballSpeedY > 0)
            {
                ballSpeedY = baseBallSpeed;
            }
            else
            {
                ballSpeedY = -baseBallSpeed;
            }
            
            ballEffect.show = false;
        }
    }
    
    //p1
    if(isWPressed)
    {
        if(paddleP1.getPositionY() - paddleP1.getScaleY() / 2 >= 0)
        {
            paddleP1.setPositionY(paddleP1.getPositionY() - paddleSpeedP1);
        }
    }
    if(isSPressed)
    {
        if(paddleP1.getPositionY() + paddleP1.getScaleY() / 2 <= game.height)
        paddleP1.setPositionY(paddleP1.getPositionY() + paddleSpeedP1);
    }
    
    //p2
    if(isUpPressed)
    {
        if(paddleP2.getPositionY() - paddleP2.getScaleY() / 2 >= 0)
        {
            paddleP2.setPositionY(paddleP2.getPositionY() - paddleSpeedP2);    
        }
    }
    if(isDownPressed)
    {
        if(paddleP2.getPositionY() + paddleP2.getScaleY() / 2 <= game.height)
        {
            paddleP2.setPositionY(paddleP2.getPositionY() + paddleSpeedP2);    
        }
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
        isWPressed = true;
    }
    
    if(e.keyCode == eventHandler.keycode.S)
    {
        isSPressed = true;
    }
    if(e.keyCode == eventHandler.keycode.UP)
    {
        isUpPressed = true;
    }
    if(e.keyCode == eventHandler.keycode.DOWN)
    {
        isDownPressed = true;
    }
    
};

eventHandler.keyUpHandler = function(e)
{
    if(e.keyCode == eventHandler.keycode.W)
    {
        isWPressed = false;
    }
    
    if(e.keyCode == eventHandler.keycode.S)
    {
        isSPressed = false;
    }
    if(e.keyCode == eventHandler.keycode.UP)
    {
        isUpPressed = false;
    }
    if(e.keyCode == eventHandler.keycode.DOWN)
    {
        isDownPressed = false;
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