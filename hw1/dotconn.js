var c = document.getElementById( "playground" ); //canvas
var ctx = c.getContext( "2d" ); //context

//canvas
ctx.fillStyle = "#66cccc"; //canvas color
ctx.fillRect( 0, 0, 500, 500 );


/* Buttons */
// Clear button 
var clearBtn = document.getElementById( "clear" );
clearBtn.addEventListener( "click", clear );

// Circle
ctx.fillStyle = "#00868B";
ctx.strokeStyle = "#00868B"; //shape color on canvas

c.addEventListener( "click", circle );


var radius = 25;
var growing = true;

function clear() {
    console.log("clear");
    
    ctx.fillStyle = "#66cccc";
    ctx.fillRect( 0, 0, 500, 500 );
    
    ctx.fillStyle = "#00868B";
    
//    numberOfCircles = 0;
};

function circle(event) {
    //draw line
    ctx.lineTo( event.offsetX, event.offsetY );
    ctx.stroke();

    //draw circle
    ctx.beginPath();
    ctx.fillStyle = "#00868B";
    ctx.arc( event.offsetX, event.offsetY, radius, 0, 2*Math.PI );
    ctx.fill();
    
    //prepare to draw next line
    ctx.beginPath();
    ctx.moveTo( event.offsetX, event.offsetY );
}





