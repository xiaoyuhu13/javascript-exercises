const palindromes = function (string) {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 
                      'h', 'i', 'j', 'k', 'l', 'm', 'n', 
                      'o', 'p', 'q', 'r', 's', 't', 'u',
                      'v', 'w', 'x', 'y', 'z']
    let lowerCaseString = string.toLowerCase();
    let stringArray = lowerCaseString.split("");
    let letterArray = stringArray.filter(function(character) {
        if (alphabet.includes(character)) return true})
    let reverseArray = letterArray.slice().reverse();
    return letterArray.join() == reverseArray.join();
};

//.reverse alters og array, slice creates copy
//.split returns new array!
//processedString = string.toLowerCase().replace(/[^a-z]/g, "")
//could use that ^ next time


// Do not edit below this line
module.exports = palindromes;
