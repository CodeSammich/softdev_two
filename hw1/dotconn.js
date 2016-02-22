var c = document.getElementById( "playground" ); //canvas
var ctx = c.getContext( "2d" ); //context

//canvas
ctx.fillStyle = "#66cccc"; //canvas color
ctx.fillRect( 0, 0, 500, 500 );

//Circle generator
c.addEventListener( "click", growCircle );

// Clear button 
var btn = document.getElementById( "clear" );
btn.addEventListener( "click", clear );

ctx.fillStyle = "#00868B";
ctx.strokeStyle = "#00868B"; //shape color on canvas

var radius = 0;
var growing = true;

function growCircle() {
    if( growing )
	radius += 2;
    else {
	radius -= 2;
	clear();
	ctx.fillStyle = "#00868B";
    }
    if( radius == (c.width / 2))
	growing = false;
    else if( radius == 0) {
	growing = true;
	ctx.strokeStyle = "#00868B";
    }

    ctx.beginPath();
    ctx.arc( c.width/2, c.height/2, radius, 0, 2*Math.PI );
    ctx.stroke();
    ctx.fill();

    window.requestAnimationFrame( growCircle );

}

/*
function circle(event) {
    //draw line
    ctx.lineTo( event.offsetX, event.offsetY );
    ctx.stroke();

    //draw circle
    ctx.beginPath();
    ctx.arc( event.offsetX, event.offsetY, radius, 0, 2*Math.PI );
    ctx.fill();
    
    //prepare to draw next line
    ctx.beginPath();
    ctx.moveTo( event.offsetX, event.offsetY );
}
*/

function clear(event) {
    console.log("clear");
    
    ctx.fillStyle = "#66cccc";
    ctx.fillRect( 0, 0, 500, 500 );

    numberOfCircles = 0;
}




