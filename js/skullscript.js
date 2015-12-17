//Pantalla
window.requestAnimFrame = (function () {
    return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame  ||
    window.mozRequestAnimationFrame     ||
    window.oRequestAnimationFrame       ||
    window.msRequestAnimationFrame      ||
    function ( /* function */ callback, /* DOMElement */ element) {
        window.setTimeout(callback, 1000 / 60);
    };
}

//Funciones del Engine
var game = (function ()){

	//Variables Globales
	var canvas, ctx, buffer, bufferctx, gameloop, fps = 60, bgMain, bgMain2

	//Funciones del GameLoop
	function loop(){
		update();
		draw();
	}


	function update() {
		scrollBackground({
			source: [bgMain, bgMain2]
		});
	}

	//Funcion para Dibujar
	function draw() {
		ctx.drawImage(buffer, 0, 0);
	}

	//Funcion para iniciar el juego
	function init() {
		canvas = document.getElementById("canvas");
		ctx = canvas.getContext("2d");

		//Buffering
		buffer = document.createElement('canvas');
        buffer.width = canvas.width;
        buffer.height = canvas.height;
        bufferctx = buffer.getContext('2d');

        //Cargar Recursos
        bgMain = new Image();
        bgMain.src = "images/fondo.jpg";
        bgMain.posX = canvas.width;

        bgMain2 = new Image();
        bgMain2.src = "images/fondo.jpg";
        bgMain2.posX = 0;

        //Bucle del Juego
        var anim = function () {
        	loop();
        	requestAnimFrame(anim);
        };
        anim();

	}
	
	return {
		init: init
	}


}