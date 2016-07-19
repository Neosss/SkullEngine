function Input()
{
	this.pressedKeys = [];
	
    var self = this;
    this.x = 0;
    this,y = 0;
    
	this.keycode =
	{
		"BACKSPACE":8,"TAB":9,"ENTER":13,"ESCAPE":27,
		"SPACE":32, "LEFT":37, "UP":38, "RIGHT":39, "DOWN":40, "0":48,
		"1":49, "2":50, "3":51, "4":52 , "5":53, "6":54, "7":55, "8":56,
		"9":57, "A":65, "B":66, "C":67, "D":68, "E":69, "F":70,
		"G":71, "H":72, "I":73, "J":74, "K":75, "L":76,
		"M":77, "N":78, "O":79, "P":80, "Q":81, "R":82,
		"S":83, "T":84, "U":85, "V":86, "W":87, "X":88,
		"Y":89, "Z":90
	};
	
	this.addKeyboardEvents = function()
	{
        for(var i = 0; i < 250; i++)
        {
            this.pressedKeys.push(false);
        }
		
        document.addEventListener("keydown", this.keyDownHandler, false);
		document.addEventListener("keyup", this.keyUpHandler, false);
	};
	
	this.keyDownHandler = function(e)
	{
		self.pressedKeys[e.keyCode] = true;
	};
	
	this.keyUpHandler = function(e)
	{
		self.pressedKeys[e.keyCode] = false;
	};
    
    this.addMouseEvents = function()
    {
        document.addEventListener("mousedown", this.mouseDownHandler, false);
    };
    
    this.mouseDownHandler = function(e)
    {
        
    };
    
    this.addEvents = function()
    {
        this.addMouseEvents();
        this.addKeyboardEvents();
    };
}