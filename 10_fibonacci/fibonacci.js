const fibonacci = function(number) {
    if(number > 0) {
    let fib = [0,1];
    for (let index = 2; index <= number; index++) {
        console.log(fib[index-2],fib[index-1]);
        fib.push( fib[index-2] + fib[index-1]);
    }
    console.table(fib);
    return Number(fib.slice(-1));
}
else {
    return "OOPS";
}
    
};

// Do not edit below this line
module.exports = fibonacci;
