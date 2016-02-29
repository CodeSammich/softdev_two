var pic = document.getElementById( "vimage" );
var change = function(e) {
    e.preventDefault();
    this.setAttribute( "fill", "green" ); //if on circle, turn green
}
var drawDot = function(x, y) {
    var c = document.createElementNS( "http://www.w3.org/2000/svg", "circle");
    c.setAttribute( "cx", x );
    c.setAttribute( "cy", y );
    c.setAttribute( "r", "100" );
    c.setAttribute( "fill", "red" );
    c.setAttribute( "stroke", "black" );
    c.addEventListener( "click", change );
    pic.appendChild( c );
};

var clicked = function(e) {
    if ( e.toElement == this ) { //this refers to canvas, if on canvas: draw dot
	drawDot( e.offsetX, e.offsetY );	
    }
}

pic.addEventListener( "click", clicked );
