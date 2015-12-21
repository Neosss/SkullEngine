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
function reproductor(source, volume, loop)
{
    this.source=source;
    this.volume=volume;
    this.loop=loop;
    var son;
    this.son=son;
    this.finish=false;
    this.stop=function()
    {
        document.body.removeChild(this.son);
    }
    this.start=function(){
        if(this.finish)return false;
        this.son=document.createElement("embed");
        this.son.setAttribute("src",this.source);
        this.son.setAttribute("hidden","true");
        this.son.setAttribute("volume",this.volume);
        this.son.setAttribute("autostart","true");
        this.son.setAttribute("loop",this.loop);
        document.body.appendChild(this.son);
    }
    this.remove=function(){
        document.body.removeChild(this.son);
        this.finish=true;
    }
    this.init=function(volume,loop)
    {
        this.finish=false;
        this.volume=volume;
        this.loop=loop;
    }
}
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
    
    this.update = function()
    {
    };
    
    this.render = function()
    {
        this.ctx.drawImage(this.buffer, 0, 0);
    };
    
    this.loop = function()
    {
        this.update();
        this.render();
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
        self.bufferctx.font = '100px Arial';
        
        
        this.helloWorld = new Image();
        this.helloWorld.src = "images/fondo.jpg";
        this.helloWorld.posX = this.canvas.width * 0.5;
        this.helloWorld.onload = function()
        {
            self.bufferctx.drawImage(self.helloWorld, 0, 0);
            
            self.bufferctx.fillText(self.helloWorldText, 140, 100);
        };
        
        

        //Bucle del Juego
        var anim = function () {
            self.loop();
            requestAnimFrame(anim);
        };
        anim();
    };
}