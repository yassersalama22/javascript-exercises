const findTheOldest = function(people) {
    const reducer = (p1,p2) => {
        const currentYear = new Date().getFullYear();
        if(p1.yearOfDeath === undefined){
            p1.yearOfDeath = currentYear;
        }

        if(p2.yearOfDeath === undefined){
            p2.yearOfDeath = currentYear;
        }

        if((p1.yearOfDeath-p1.yearOfBirth) > (p2.yearOfDeath-p2.yearOfBirth)) {
            return p1;
        }
        else
        {
            return p2;
        }

    };
    return people.reduce(reducer);
};

// Do not edit below this line
module.exports = findTheOldest;
