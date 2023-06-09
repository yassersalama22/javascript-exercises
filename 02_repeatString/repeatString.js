const repeatString = function(inputString,num) {
    let resultString = '';
    if(num<0){
        return 'ERROR';
    }
    for (let index = 0; index < num; index++) {
        resultString+=inputString;
    }
    return resultString;
};

// Do not edit below this line
module.exports = repeatString;
