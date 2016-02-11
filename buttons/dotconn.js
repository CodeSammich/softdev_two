var c = document.getElementById( "playground" );
var ctx = c.getContext( "2d" );

ctx.fillStyle = "#66cccc";
ctx.fillRect( 0, 0, 500, 500 );

c.addEventListener( "click", circle );

function circle(event) {
    console.log("circle!");
    var mouseX = event.offsetX;
    var mouseY = event.offsetY;

    console.log(mouseX);
    
    ctx.fillStyle = "#00868B";
    ctx.beginPath();
    ctx.arc( mouseX, mouseY, 25, 0, 2*Math.Pi );
    ctx.fill();
    ctx.closePath();
}

/*
function getMousePos( canvas, evt ) {
    var rect = ctx.getBoundingClientRect();
    return {
	x: evt.clientX - rect.left,
	y: evt.clientY - rect.top
    };
}
*/

/*
function clear() {

    
}

// Clear button 
var btn = document.getElementById( "clear" );
btn.addEventListener( "click", clear );
*/


