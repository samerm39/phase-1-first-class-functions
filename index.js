//test 1
function receivesAFunction(callback){
    callback();
}

function myCallBack(){
    console.log("This is the callback function.");
}

receivesAFunction(myCallBack);

//test 2


function returnsANamedFunction() {
    return function namedFunction() {}
}

//test 3

function returnsAnAnonymousFunction() {
    return function(){}
}

