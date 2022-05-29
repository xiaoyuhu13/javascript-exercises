const findTheOldest = function(array) {
    array.map(function(person) {
        if (!person.yearOfDeath) {person.yearOfDeath = new Date().getFullYear()}
    });
    return array.sort((a,b) => (a.yearOfDeath - a.yearOfBirth > b.yearOfDeath - b.yearOfBirth)? -1 : 1)[0];
};

// Do not edit below this line
module.exports = findTheOldest;
