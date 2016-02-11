var c = document.getElementById("c");
var ctx = c.getContext( "2d" );
ctx.fillStyle = "#2f2f3d";
ctx.fillRect( 0, 0, 500, 500 );

ctx.strokeStyle = "#ff0000";
ctx.strokeRect( 50, 50, 400, 400);

ctx.strokeRect( 150, 150, 40, 80);
ctx.strokeRect( 350, 150, -40, 80);
ctx.strokeRect( 100, 350, 300, 40);

/*
//Circle
ctx.beginPath();
ctx.arc( 150, 150, 20, 0, MATH.PI * 2 );
ctx.stroke(); 
*/
