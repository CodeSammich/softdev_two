var c = document.getContextById( "playground" );
var ctx = c.getContext( "2d" );

var btn = document.getElementById( "clear" );

btn.addEventListener( "click", circle );

function circle(e) {
    ctx.beginPath();
    ctx.arc( e.clientX, e.clientY, 25, 0, 2*Math.Pi );
    ctx.stroke();
    ctx.closePath();
}
