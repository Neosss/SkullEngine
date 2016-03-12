//Generated text box with shapes
function SkullTextbox(x, y, width, height)
{
    this.enabled = true;
    
    //configuration
    this.isNameLabelOn = false;
    this.isIconOn = false;
    this.colorR = 0;
    this.colorG = 0;
    this.colorB = 0;
    this.opacity;
    this.width = width;
    this.height = height;
    this.positionX = x;
    this.positionY = y;
    
    //text box
    this.fontSize = 12;
    this.textPositionX = 0;
    this.textPositionY = 0;
    this.maxWidth = 100;
    this.fontHeight = 10;
    
    //label box
    this.labelFontSize = 12;
    this.labelPositionX = 0;
    this.labelPositionY = 0;
    this.labelWidth = 150;
    this.labelHeight = 50;
    
    //icon
    this.iconPositionX = 0;
    this.iconPositionY = 0;
    this.iconScale = 0;
    
    this.hide = function()
    {
        this.enabled = false;
    };
    
    this.show = function()
    {
        this.enabled = true;
    };
    
    this.enableLabel = function()
    {
        this.isNameLabelOn = true;
    };
    
    this.setLabelProperties = function(fontSize, x, y, w, h)
    {
        this.labelFontSize = fontSize;
        this.labelPositionX = x;
        this.labelPositionY = y;
        this.labelWidth = w;
        this.labelHeight = h;
    };
    
    this.setIconProperties = function(x, y, scale)
    {
        this.iconPositionX = x;
        this.iconPositionY = y;
        this.iconScale = scale;
    };
    
    this.enableIcon = function()
    {
        this.isIconOn = true;
    };
    
    //opacity from 0.0 to 1.0
    this.setColor = function(r, g, b, opacity)
    {
        this.colorR = r;
        this.colorG = g;
        this.colorB = b;
        this.opacity = clamp(opacity, 0.0, 1.0);
    };
    
    this.setTextProperties = function(fontSize, x, y, maxWidth, fontHeight)
    {
        this.fontSize = fontSize;
        this.textPositionX = x;
        this.textPositionY = y;
        this.maxWidth = maxWidth;
        this.fontHeight = fontHeight;
    };
    
    this.createSimpleTextbox = function(context)
    {
        if(this.enabed)
        {
            context.fillStyle = "rgba(" + this.colorR + "," + this.colorG + "," + this.colorB + "," + this.opacity+")";
            context.fillRect(this.positionX, this.positionY, this.width, this.height);
            context.lineWidth = 2;
            context.strokeStyle = "rgba(" + (this.colorR - 50)+ "," + (this.colorG - 50) + "," + (this.colorB - 50) + "," + this.opacity+")";
            context.strokeRect(this.positionX, this.positionY, this.width, this.height);

            if(this.isNameLabelOn)
            {
                context.fillStyle = "rgba(" + this.colorR + "," + this.colorG + "," + this.colorB + "," + this.opacity+")";
                context.fillRect(this.labelPositionX, this.labelPositionY, this.labelWidth, this.labelHeight);
            }
        }
    };
}

//Custom text box
function SkullCustomTextbox()
{
    this.isNameLabelOn = false;
    this.isIconOn = false;
}
