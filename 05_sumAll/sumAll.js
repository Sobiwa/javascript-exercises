const sumAll = function (num1, num2) {
    if (num1 < 0 || num2 < 0 || typeof num1 != 'number'|| typeof num2 != 'number') return 'ERROR';
    let sum1 = 0;
    const greater = num1 > num2 ? num1 : num2;
    const lesser = num1 < num2 ? num1 : num2;
    for (i = lesser; i <= greater; i++) {
        sum1 += i;
    }
    return sum1;
};

// Do not edit below this line
module.exports = sumAll;
