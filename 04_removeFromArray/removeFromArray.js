const removeFromArray = function(inputArray) {
    // check if the input is an array 
    if(Array.isArray(inputArray)){
        // The array is valid lets find out if there's atlease one more
        // value to remove from the array
        if(arguments.length>1)
        {
            // loop through the optional argmunets starting from index 1,
            // index 0 is the array we would like to filter ou
            for (let index = 1; index < arguments.length; index++) {
                // Check if value exists in the array:
                if(inputArray.indexOf(arguments[index])>=0)
                {
                    // Remove the value if found from the array bu index
                    inputArray.splice(inputArray.indexOf(arguments[index]),1);
                }
            }
            return inputArray;
            
        }
        else
        {
            // nothing to filter out return the same array
            return inputArray;
        }
        
    }
    else
    {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = removeFromArray;
