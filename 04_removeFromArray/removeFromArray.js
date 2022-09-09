const removeFromArray = function(array, ...remove) {
    for (p = 0; p < remove.length; p++) {
        for (i = 0; i < array.length; i++) {
            if (remove[p] === array[i]) {
                array.splice(i, 1);
            }
        }
    }
    return array;


};

// Do not edit below this line
module.exports = removeFromArray;
