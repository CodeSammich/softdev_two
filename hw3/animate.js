var c = document.getElementById( "playground" ); //canvas
var ctx = c.getContext( "2d" ); //context

//canvas
ctx.fillStyle = "#66cccc"; //canvas color
ctx.fillRect( 0, 0, 500, 500 );

var x = 250;
var y = 250;
var right = true;
var down = true;
var moving = true;
var logo = new Image();
logo.src = "logo_dvd.jpg";

var clear = function(){
    console.log("clear");
    
    ctx.fillStyle = "#66cccc";
    ctx.fillRect( 0, 0, 500, 500 );
    
    ctx.fillStyle = "#00868B";
};

function dvd() {
    console.log("dvd" + x);
    
    if( x == 0 || x == 400 )
	right = !right;
    if( y == 0 || y == 450 )
	down = !down;
    
    if( moving ) {
	if( right )
	    x++;
	else
	    x--;
	if( down )
	    y--;
	else
	    y++;
    }

    clear();
    ctx.drawImage( logo, x, y, 100, 50 );
    
    requestId = window.requestAnimationFrame( dvd );
}

/*
function growCircle() {
    ctx.fillStyle = "#00868B";

    if( growing )
	radius++;
    else {
	radius--;
	clear();
    }
    if( radius == (c.width / 2)) {
	growing = false;
//	ctx.strokeStyle = "#66cccc";
    }
    else if( radius == 0) {
	growing = true;
    }

    ctx.beginPath();
    ctx.arc( c.width/2, c.height/2, radius, 0, 2*Math.PI );
    ctx.stroke();
    ctx.fill();

    requestId = window.requestAnimationFrame( growCircle );

}
*/

function stop() {
    if(requestId) {
	window.cancelAnimationFrame( requestId );
	reuqestId = undefined;
    }
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

/* Buttons */
// Clear button 
var clearBtn = document.getElementById( "clear" );
clearBtn.addEventListener( "click", clear );

// Stop button
var stopBtn = document.getElementById( "stop" );
stopBtn.addEventListener( "click", stop );

/*
// Circle
ctx.fillStyle = "#00868B";
ctx.strokeStyle = "#00868B"; //shape color on canvas
*/
c.addEventListener( "click", dvd );





