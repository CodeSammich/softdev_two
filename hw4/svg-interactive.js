var svg = document.getElementById( "vimage" );

var radius = 25;
var growing = false;


var clear = function(){
    console.log("clear");
    
    var c = document.createElementNS( "http://www.w3.org/2000/svg", "rectangle");
    var lc = svg.lastChild;
    for(; lc ;lc=svg.lastChild){
	lc.remove();
    }
};


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
    svg.appendChild( c );
};

var clicked = function(e) {
    if ( e.toElement == this ) { //this refers to canvas, if on canvas: draw dot
	drawDot( e.offsetX, e.offsetY, 25 );	
    }
}

svg.addEventListener( "click", clicked );
document.addEventListener( "click", clear );
