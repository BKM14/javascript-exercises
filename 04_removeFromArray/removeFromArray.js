const removeFromArray = function(userArray) {
    let index;
    let elementsToRemove = [];
    let finalArray = []

    for (index = 1; index < arguments.length; index++) {
        elementsToRemove.push(arguments[index]);
    }
    
    for (const element of userArray) {
        if (!(elementsToRemove.includes(element))) {
            finalArray.push(element);
        }
    }

    return finalArray;

};

// Do not edit below this line
module.exports = removeFromArray;
