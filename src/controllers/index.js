

const tx = new Transaction( { name: 'Silence' } )

tx.save( function ( err, data ) {
  if ( err ) return console.error( err )
  console.log( data )
} )
