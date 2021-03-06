//Sets up basic connection with HTML file (index.html)
var c = document.getElementById( "ftb2maga" );
var ctx = c.getContext( "2d" );

/*
  fillStyle ==> fill color in hex
*/
ctx.fillStyle = "#66cccc" 

/* 
   .fillRect( x0, y0, dx, dy ) ==> draws rectangle with fill color
   defined by fillStyle
*/
ctx.fillRect( 0, 0, 538, 538 );

/*
  strokeStyle ==> stroke (not fill) color in hex
*/
ctx.strokeStyle = "#DB2929";

/*
  .strokeRect( x0, y0, dx, dy ) ==> draws rectangle with border color defined by strokeStyle
*/
ctx.strokeRect( 126, 134, 30, 135 ); //eyes
ctx.strokeRect( 350, 134, 30, 135 );

/*
  beginPath() ==> pen down 
*/
ctx.beginPath();

/*
  moveTo( x, y ) ==> moves pen to (x, y) for start coordinates
*/
ctx.moveTo( 156, 350 );

/*
  lineTo( x, y ) ==> draws a straight line to (x, y) from previous
  pen location
*/
ctx.lineTo( 350, 350 );

/*
  arc( x, y, r, startAngle, endAngle, <optional> direction )
  x, y = center coors
  r = radius
  startAngle, endAngle = starting radians (0 at 3 o'clock position)
  *optional*: direction
      true == counterclockwise
      false (default) == clockwise
*/
ctx.arc( 256, 350, 97, 1*Math.PI, 0, true );

/*
  stroke() ==> draws all the previous pen marks
*/
ctx.stroke();

/*
  closepath() ==> pen up
*/
ctx.closepath();
