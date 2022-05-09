const reverseString = function(string) {
    let reversedString = "";
    let currentLetter = "";
    for (let i=0; i<string.length; i++) {
        currentLetter = string.substr(-1-i, 1);
        reversedString += currentLetter;
    };
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
