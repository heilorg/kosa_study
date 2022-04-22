const express = require( 'express' );
const app = express();

app.get( '/', ( req, res ) => {
    res.send( 'hello calc' )
} );

app.get( '/add', ( req, res ) => {
    let p1 = req.param( 'p1' );
    let p2 = req.param( 'p2' );
    let result = Number( p1 ) + Number( p2 );

    res.send( 'result: ' + result );
} );

app.listen( 7777, () => {
    console.log( 'server started' );
} );