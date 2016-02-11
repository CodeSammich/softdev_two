var c = document.getElementById( "playground" ); //canvas
var ctx = c.getContext( "2d" ); //context

ctx.fillStyle = "#66cccc";
ctx.fillRect( 0, 0, 500, 500 );

//Circle generator
var numberOfCircles = 0;
c.addEventListener( "click", circle );

// Clear button 
var btn = document.getElementById( "clear" );
btn.addEventListener( "click", clear );

var prev_mouseX, prev_mouseY;

function circle(event) {
    console.log("circle!");
    var mouseX = event.offsetX;
    var mouseY = event.offsetY;
    console.log(mouseX);
    console.log(mouseY);
    
    ctx.fillStyle = "#00868B";
    ctx.strokeStyle = "#00868B";
    ctx.beginPath();

    if(numberOfCircles > 0) {
	ctx.moveTo( prev_mouseX, prev_mouseY );
	ctx.lineTo( mouseX, mouseY );
    }
    prev_mouseX = mouseX;
    prev_mouseY = mouseY;
    
    ctx.arc( mouseX, mouseY, 50, 0, 2*Math.PI );
    ctx.fill();
    
    ctx.closePath();
    numberOfCircles++;
}

function clear(event) {
    console.log("clear");
    
    ctx.fillStyle = "#66cccc";
    ctx.fillRect( 0, 0, 500, 500 );
}




