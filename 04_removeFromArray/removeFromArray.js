const removeFromArray = function(array, ...theArgs) {
    for (const item of theArgs){
        if (array.includes(item)) {
          let index = array.indexOf(item);
          array.splice(index, 1);
        } 
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
