//Pantalla
window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();

//Funciones del Engine
function SkullEngine(fps, anchura, altura)
{
    this.canvas;
    this.ctx;
    this.buffer;
    this.bufferctx;
    this.gameloop;
    this.fps = fps;
    this.helloWorld;
    this.anchura = anchura;
    this.altura = altura;
    this.helloWorldText;
    
    this.children = [];
    
    this.update = function()
    {
        
    };
    
    this.render = function()
    {
        var self = this;
        
        for(var i = 0; i < this.children.length; i++)
        {
            if(this.children[i] instanceof SkullSprite)
            {
                this.bufferctx.drawImage(this.children[i].getSprite(), this.children[i].getPositionX(), this.children[i].getPositionY(), this.children[i].getScaleX(), this.children[i].getScaleY());
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
    
    this.init = function()
    {
        var self = this;
        //Dimensiones de la pantalla
        this.anchura = document.getElementById("canvas").width = anchura;
        this.altura = document.getElementById("canvas").height = altura;

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