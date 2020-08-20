function area(x){
    x=x*x;
    return x;    
}
function tst(callbackfunction){
    return callbackfunction(20);
}
let y= tst(area);
console.log(y);