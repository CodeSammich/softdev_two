// Load the fs (filesystem) module
var fs = require( "fs" );

// Read the contents of the file into memory
fs.readFile( "example_log.txt", function (err, logData) {

    //if an error, throw will display exception and end app
    if( err ) throw err;

    //logData is a Buffer, convert to string
    var text = logData.toString();)
}
