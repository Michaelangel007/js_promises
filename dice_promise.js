    function dieToss()
    {
        console.log( "1c) dieToss()" );
        return Math.floor(Math.random() * 6) + 1;
    }

console.log('1 - before promise');

    var onPromise = function( fulfill, reject)
    {
        console.log( "1b) onPromise()" );
        var n = dieToss();

        if (n === 6)
            fulfill( n );
        else
            reject( n );

        console.log( "2 - end promise" );
    };

    var onPass = function( toss )
    {
        console.log( "3a) onPass" );
        console.log( " Yay, threw a " + toss + "." );
    };

    var onFail = function( toss )
    {
        console.log( "3b) onFail" );
        console.log( " Oh, noes, threw a " + toss + "." );
    };

// 2 lines
//var promise = new Promise( onPromise );
//promise.then( onPass, onFail );

// 1-liner
new Promise( onPromise ).then( onPass, onFail );

console.log( "3 -- all done" );

