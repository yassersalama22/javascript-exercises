const palindromes = function (string) {
    let regx = /[^A-Za-z0-9]/g;
    string  = string.toLowerCase().replace(regx,"");
    let stringToCompare = string.split("").reverse().join("");
    return (string === stringToCompare);
};

// Do not edit below this line
module.exports = palindromes;
