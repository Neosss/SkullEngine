function SkullSprite(path, posX, posY, scaleX, scaleY)
{
    this.path = path || "";
    this.positionX = posX || 0;
    this.positionY = posY || 0;
    
    this.sprite = new Image();
    
    this.anchorPointX = 0;
    this.anchorPointY = 0;
    
    this.scaleX;
    this.scaleY;
    
    this.rect = {x : 0, y : 0, w : 0, h : 0};
    
    this.tmpScaleX = scaleX;
    this.tmpScaleY = scaleY;
    
    this.width = 0;
    this.height = 0;
    
    this.rotateAngle = 0;
    
    this.enabled = true;
    this.show = true;
    
    var self = this;
    
    this.sprite.onload = function ()
    {
        self.scaleX = self.sprite.width;
        self.scaleY = self.sprite.height;
    };
    
    this.sprite.src = this.path;
    
    this.setAnchorPoint = function(x, y)
    {
        if(x != undefined)
        {
            this.anchorPointX = clamp(x, 0.0, 1.0);
        }
        if(y != undefined)
        {
            this.anchorPointY = clamp(y, 0.0, 1.0);
        }
    };
    
    this.setRotation = function(angle)
    {
        if(angle != undefined)
        {
            this.rotateAngle = angle;
        }
    };
    
    this.getTranslateX = function()
    {
        if(this.scaleX != undefined)
        {
            return (this.anchorPointX * this.scaleX);
        }
        else
        {
            return (this.anchorPointX * this.sprite.width);
        }
    };
    
    this.getTranslateY = function()
    {
        if(this.scaleY != undefined)
        {
            return (this.anchorPointY * this.scaleY);
        }
        else
        {
            return (this.anchorPointY * this.sprite.height);
        }
    };
    
    this.setPositionX = function(posX)
    {
        this.positionX = posX;
    };
    
    this.setPositionY = function(posY)
    {
        this.positionY = posY;   
    };
    
    this.setPosition = function(posX, posY)
    {
        this.positionX = posX;
        this.positionY = posY;
    };
    
    this.setScaleX = function(scaleX, auto)
    {
        var autoScale = auto || false;
        this.sprite.onload = function()
        {
            if(autoScale)
            {
                var ruleOfThree = (scaleX*self.sprite.height)/self.sprite.width;
                self.scaleY = ruleOfThree;
            }
            else
            {
                self.scaleY = self.sprite.height;
            }
            
            self.scaleX = scaleX;
        }
    };
    
    this.setScaleY = function(scaleY, auto)
    {
        var autoScale = auto || false;
        this.sprite.onload = function()
        {
            if(autoScale)
            {
                var ruleOfThree = (scaleY*self.sprite.width)/self.sprite.height;
                self.scaleX = ruleOfThree;
            }
            else
            {
                self.scaleX = self.sprite.width;
            }
            
            self.scaleY = scaleY;
        }
    };
    
    this.setScale = function(scaleX, scaleY)
    {
        this.sprite.onload = function()
        {
            self.scaleX = scaleX;
            self.scaleY = scaleY;
        }
        
        self.scaleX = scaleX;
        self.scaleY = scaleY;
    };
    
    this.getPath = function()
    {
        return this.path;
    };
    
    this.getPositionX = function()
    {
        return this.positionX;
    };
    
    this.getPositionY = function()
    {
        return this.positionY;
    };
    
    this.getSprite = function()
    {
        return this.sprite;
    };
    
    this.getScaleX = function()
    {
        if(this.scaleX != undefined)
        {
            return this.scaleX;
        }
        else
        {
            return this.sprite.width;
        }
    };
    
    this.getScaleY = function()
    {
        if(this.scaleX != undefined)
        {
            return this.scaleY;
        }
        else
        {
            return this.sprite.height;
        }
    };
    
    this.getRect = function()
    {
        this.rect.x = this.positionX;
        this.rect.y = this.positionY;
        this.rect.w = this.scaleX;
        this.rect.h = this.scaleY;
        
        return this.rect;
    };
    
    this.collidesWithRect = function(rect2)
    {
        var rect1 = this.getRect();
        console.log(rect2.w);
        //simple AABB (Axis-Aligned Bounding Box)
        //REF. Mozilla Developer / Game Techniques
        
        if (rect1.x < rect2.x + rect2.w &&
        rect1.x + rect1.w > rect2.x &&
        rect1.y < rect2.y + rect2.h)
        {
            console.log("true");
            return true;
        }
        
        return false;
    };
}