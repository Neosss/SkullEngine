function SkullText(text, fontSize, positionX, positionY, maxWidth, fontHeight)
{
    this.text = text || "";
    this.positionX = positionX || 0;
    this.postiionY = positionY || 0;
    this.fontSize = fontSize || 1;
    this.maxWidth = maxWidth || 2000;
    this.fontHeight = fontHeight || 25;
    this.fontColor = 'rgb(0, 0, 0)';
    this.lines = [];
    this.linesY = [];
    
    this.setLines = function(context)
    {
        
        var textLines = this.text.split("/n");
        var y = this.positionY;
        this.linesY.push(y);
        
        for(var i = 0; i < textLines.length; i++)
        {
            var words = textLines[i].split(" ");
            var line = "";
            
            for (var n = 0; n < words.length; n++)
            {
                var testLine = line + words[n] + " ";
                var metrics = context.bufferctx.measureText(testLine);
                var testWidth = metrics.width;

                if (testWidth > this.maxWidth && n > 0) {
                    this.lines.push(line);
                    line = words[n] + " ";
                    y += this.fontHeight;
                    this.linesY.push(y);
                }
                else {
                    line = testLine;
                }
            }
            
            this.lines.push(line);
            y += this.fontHeight;
            this.linesY.push(y);
        }
    };
    
    this.setFont = function(context)
    {
        context.bufferctx.font = this.fontSize + 'px Arial';
        context.bufferctx.fillStyle = this.fontColor;
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
    
    this.setFontSize = function(fontSize)
    {
        this.fontSize = fontSize;
    };
    
    this.getText = function()
    {
        return this.text;
    };
    
    this.getPositionX = function()
    {
        return this.positionX;
    };
    
    this.getPositionY = function()
    {
        return this.positionY;
    };
    
    this.setColor = function(r, g, b)
    {
        this.fontColor = 'rgb(' + r + ',' + g + ',' + b + ')';
    };
}