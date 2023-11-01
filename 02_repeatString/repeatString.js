const repeatString = function(stringUser, num) {
    let result = "";

    if (num < 0) {
        return "ERROR";
    } else if (stringUser === "") {
        return "";
    }

    for (let i = 0; i < num; i++) {
        result += stringUser;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
