var onP = function(res,rej) {
    console.log( "onP()" );
    res("aaa");
}
var onB = function(result) {
    console.log( "onB()" );
    return "bbb";
};
var onC = function(result) {
    console.log( "onC()" );
    console.log(result);
};

new Promise( onP ).then( onB ).then( onC );

