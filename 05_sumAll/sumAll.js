const sumAll = function(start, end) {
    let num, sum = 0;

    if (typeof start === 'string' || typeof end === 'string') {
        return "ERROR";
    } else if (isNaN(start) || isNaN(end)) {
        return "ERROR";
    } else if (start < 0 || end < 0) {
        return "ERROR";
    } else {
        if (start < end) {
            for (num = start; num <= end; num++) {
                sum += num;
            }
        } else {
            for (num = end; num <= start; num++) {
                sum += num;
            }
        }
        return sum;  
    }
    
};

// Do not edit below this line
module.exports = sumAll;
