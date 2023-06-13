const fibonacci = function(number) {
    let init = 0;
    let sum = 0;
    number = typeof(number) === "number" ? number : parseInt(number);
    let febseq = [0,1];
    if(typeof(number) === "number" && number > 0)
    {
        for (let index = 1; index <= number; index++) {
            
            febseq.push(febseq[index]+febseq[index-1]);
        }
        return febseq[number];
    }
    else
    {
        return "OOPS";
    }
};

// Do not edit below this line
module.exports = fibonacci;
