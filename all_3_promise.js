var delay = function()
{
    return (Math.random()*100)|0;
}

var loaded = 0; // Debug stat

var Load1 = new Promise( function( resolve, reject )
{
    setTimeout( function() { onLoad1(); resolve(); }, delay() );       
});

var onLoad1 = function( resolve )
{
    loaded++;
    console.log( "onLoad1(): " + loaded );
};

var Load2 = new Promise( function( resolve, reject )
{
    setTimeout( function() { onLoad2(); resolve(); }, delay() );       
});

var onLoad2 = function( res )
{
    loaded++;
    console.log( "onLoad2(): " + loaded );
};

var Load3 = new Promise( function( resolve, reject )
{
    if (delay() < 50)
        reject();
    else
        setTimeout( function() { onLoad3(); resolve(); }, delay() );       
});

var onLoad3 = function()
{
    loaded++;
    console.log( "onLoad3(): " + loaded );
}

var onLoadAll = function()
{
    console.log( "Loaded: " + loaded );
}

var onFailAny = function()
{
    console.log( "Failed: " + loaded );
}

Promise.all( [ Load1, Load2, Load3 ] ).then( onLoadAll ).catch( onFailAny );

