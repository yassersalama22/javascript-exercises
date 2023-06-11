const convertToCelsius = function(d) {
  return Math.round(((d-32) * (5/9))*10)/10;
};

const convertToFahrenheit = function(d) {
  return Math.round(((d * (9/5)) + 32)*10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
