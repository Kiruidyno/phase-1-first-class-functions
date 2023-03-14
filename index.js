function receivesAFunction(callback){
    const name= prompt('enter your name.');
    callback(name);
}
function returnsANamedFunction(){
    return function namedFunction (callback){
        const name=prompt('enter your name.');
        callback(name);
    }
}
function returnsAnAnonymousFunction(){
    return function(){
        const name=prompt('enter your name');
        callback(name)
    }
}
return returnsAnAnonymousFunction();

