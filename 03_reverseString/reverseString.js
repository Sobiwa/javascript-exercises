const reverseString = function(reverseMe) {
    const length = reverseMe.length - 1;
    let array = [];
    for (i = length; i >= 0; i--) {
        array.push(reverseMe.charAt(i));
    }
    let reversed = array.join('');
    return reversed;

};

// Do not edit below this line
module.exports = reverseString;
