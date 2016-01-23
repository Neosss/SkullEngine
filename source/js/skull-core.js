window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();

function SkullEngine(fps, width, height)
{
    this.canvas;
    this.ctx;
    this.buffer;
    this.bufferctx;
    this.gameloop;
    this.fps = fps;
    this.helloWorld;
    this.width = width;
    this.height = height;
    this.helloWorldText;
    
    this.left = 0;
    this.center = 1;
    this.right = 2;
    
    this.children = [];
    
    this.currentScene;
    
    this.update = function()
    {
        
    };
    
    this.render = function()
    {
        var self = this;
        
        this.bufferctx.clearRect(0, 0, this.width, this.height);
        
        for(var i = 0; i < this.children.length; i++)
        {
            if(this.children[i] instanceof SkullSprite)
            {
                if(this.children[i].enabled && this.children[i].show)
                {
                    this.bufferctx.translate(this.children[i].getPositionX(), this.children[i].getPositionY());
                    this.bufferctx.rotate(this.children[i].rotateAngle * (Math.PI/180));
                    this.bufferctx.drawImage(this.children[i].getSprite(), -this.children[i].getTranslateX(), -this.children[i].getTranslateY(), this.children[i].getScaleX(), this.children[i].getScaleY());
                    this.bufferctx.rotate(-this.children[i].rotateAngle * (Math.PI/180));
                    this.bufferctx.translate(-this.children[i].getPositionX(), -this.children[i].getPositionY());
                }
            }
            else if(this.children[i] instanceof SkullText)
            {
                this.children[i].setFont(this);
                this.bufferctx.fillText(this.children[i].getText(), this.children[i].getPositionX(), this.children[i].getPositionY());
            }
        }
        if(this.currentScene != undefined)
        {
        
            for(var i = 0; i < this.currentScene.children.length; i++)
            {
                if(this.currentScene.children[i] instanceof SkullSprite)
                {
                   if(this.currentScene.children[i].enabled && this.currentScene.children[i].show)
                   {
                        this.bufferctx.translate(this.currentScene.children[i].getPositionX(), this.currentScene.children[i].getPositionY());
                        this.bufferctx.rotate(this.currentScene.children[i].rotateAngle * (Math.PI/180));
                        this.bufferctx.drawImage(this.currentScene.children[i].getSprite(), -this.currentScene.children[i].getTranslateX(), -this.currentScene.children[i].getTranslateY(), this.currentScene.children[i].getScaleX(), this.currentScene.children[i].getScaleY());
                        this.bufferctx.rotate(-this.currentScene.children[i].rotateAngle * (Math.PI/180));
                        this.bufferctx.translate(-this.currentScene.children[i].getPositionX(), -this.currentScene.children[i].getPositionY());
                   }
                }
                else if(this.currentScene.children[i] instanceof SkullText)
                {
                    this.currentScene.children[i].setFont(this);
                    
                    for(var j = 0; j < this.currentScene.children[i].lines.length; j++)
                    {
                        this.bufferctx.fillText(this.currentScene.children[i].lines[j], this.currentScene.children[i].getPositionX(), this.currentScene.children[i].linesY[j]);
                    }
                }
            }
        }
        
        this.ctx.drawImage(this.buffer, 0, 0);
    };
    
    this.loop = function()
    {
        this.update();
        this.render();
    };
    
    this.addChild = function(child)
    {
        this.children.push(child);
    };
    
    this.removeChild = function(child)
    {
        var index = this.children.indexOf(child);
        this.children.splice(index, 1);
    };
    
    this.setScene = function(scene)
    {
        this.currentScene = scene;
    };
    
    this.init = function()
    {
        var self = this;
        //Dimensiones de la pantalla
        document.getElementById("canvas").width = this.width;
        document.getElementById("canvas").height = this.height;

        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext("2d");

        //Buffering
        this.buffer = document.createElement('canvas');
        this.buffer.width = this.canvas.width;
        this.buffer.height = this.canvas.height;
        this.bufferctx = this.buffer.getContext('2d');

        //Cargar Recursos
        this.helloWorldText = "Hello World!";
        this.bufferctx.font = '100px Arial';

        //Bucle del Juego
        var anim = function () {
            self.loop();
            requestAnimFrame(anim);
        };
        anim();
    };
}