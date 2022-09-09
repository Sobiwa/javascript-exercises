const ftoc = function(F) {
  const C = (F -32) * (5/9);
  const Celsius = parseFloat(C.toFixed(1));
  return Celsius;
};

const ctof = function(C) {
  const F = C * (9/5) + 32;
  const Fahrenheit = parseFloat(F.toFixed(1));
  return Fahrenheit;

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
