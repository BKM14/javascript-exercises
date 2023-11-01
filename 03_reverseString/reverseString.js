const reverseString = function(userString) {
    let revString = "";
    for (let index = userString.length - 1; index >= 0; index--) {
        revString += userString[index];
    }
    return revString;
};

// Do not edit below this line
module.exports = reverseString;
