const sumAll = function(number1, number2) {
    // check number 1 is number and greater than or equal 0
    if(typeof(number1)!="number" || number1 < 0)
    {
        return "ERROR";
    }
    // check number 2 is number and greater than or equal 0
    if(typeof(number2)!="number" || number1 < 0)
    {
        return "ERROR";
    }

    // now sort the arguments to start from the smaller number
    args = Array.from(arguments);
    args = args.sort();
    // the varaiable will hold the value of the sum
    let sum = 0;
    // loop through the range of the argument and sum the numbers
    for (let index = args[0]; index <= args[1]; index++) {
        sum += index;
    }

    return sum;

};

// Do not edit below this line
module.exports = sumAll;
