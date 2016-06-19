var V = require('./vector-math');
var gradient = require('./gradient');

module.exports = function(F, options) {
  options = options || {};
  options.gamma = options.gamma || 0.1;
  options.initialValue = options.initialValue || [0, 0];
  options.maxSteps = options.maxSteps || 100;

  var gradF = gradient(F);
  var currentValue = options.initialValue.map(x => x);

  for(var i = 0; i < options.maxSteps; i++) {
    currentValue = V.subtract(currentValue, V.scale(gradF(currentValue), options.gamma));
  }

  return currentValue;
};
