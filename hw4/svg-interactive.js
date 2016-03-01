var pic = document.getElementById( "vimage" );

var radius = 25;
var growing = false;

/*
var clear = function(){
    console.log("clear");
    
    var c = document.createElementNS( "http://www.w3.org/2000/svg", "rectangle");
    c.setAttribute( "rx", 0);
    c.setAttribute( "ry", 0);
    c.setAttribute( "r", 500);
    c.setAttribute( "fill", "#66cccc");
    c.setAttribute( "stroke", "black");

};
*/

var grow = function(e) {
    if( growing )
	radius++;
    else {
	radius--;
	clear();
    }
    if( radius == (pic.width / 2)) {
	growing = false;
    }
    else if( radius == 0 ) {
	growing = true;
    }

    drawDot( e.offsetX, e.offsetY, radius );
    requestId = window.requestAnimationFrame( grow );
}

var change = function(e) {
    e.preventDefault();
    this.setAttribute( "fill", "#00868B" ); //if on circle, turn green
    if( this.getAttribute( "fill") == "#00868B" )
	this.addEventListener( "click", grow );
}

var drawDot = function(x, y, r) {
    var c = document.createElementNS( "http://www.w3.org/2000/svg", "circle");
    c.setAttribute( "cx", x );
    c.setAttribute( "cy", y );
    c.setAttribute( "r", 30 );
    c.setAttribute( "fill", "red" );
    c.setAttribute( "stroke", "black" );
    c.addEventListener( "click", change );
    pic.appendChild( c );
};

var clicked = function(e) {
    if ( e.toElement == this ) { //this refers to canvas, if on canvas: draw dot
	drawDot( e.offsetX, e.offsetY, 25 );	
    }
}

pic.addEventListener( "click", clicked );
