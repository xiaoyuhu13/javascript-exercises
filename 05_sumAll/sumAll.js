const sumAll = function(x, y) {
    if (x < 0 || y < 0 || typeof(x) != 'number' || typeof(y) != 'number'){
        return 'ERROR';
    };
    let sum = 0;
    for (let i=0; i <= Math.abs(y-x); i++){
        if (x > y) {
            sum += y+i;
        } else {
            sum += x+i;
        }
        };
    return sum
};

// Do not edit below this line
module.exports = sumAll;
