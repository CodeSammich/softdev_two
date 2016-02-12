var c = document.getElementById( "playground" ); //canvas
var ctx = c.getContext( "2d" ); //context

//canvas
ctx.fillStyle = "#66cccc";
ctx.fillRect( 0, 0, 500, 500 );

//Circle generator
c.addEventListener( "click", circle );

// Clear button 
var btn = document.getElementById( "clear" );
btn.addEventListener( "click", clear );

ctx.fillStyle = "#00868B";
ctx.strokeStyle = "#00868B";

function circle(event) {
    //draw line
    ctx.lineTo( event.offsetX, event.offsetY );
    ctx.stroke();

    //draw circle
    ctx.beginPath();
    ctx.arc( event.offsetX, event.offsetY, 25, 0, 2*Math.PI );
    ctx.fill();
    
    //prepare to draw next line
    ctx.beginPath();
    ctx.moveTo( event.offsetX, event.offsetY );
}

function clear(event) {
    console.log("clear");
    
    ctx.fillStyle = "#66cccc";
    ctx.fillRect( 0, 0, 500, 500 );

    numberOfCircles = 0;
}




