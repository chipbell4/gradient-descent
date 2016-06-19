var V = require('./vector-math');
var gradient = require('./gradient');

module.exports = function(F, options) {
  options = options || {};
  options.gamma = options.gamma || 0.1;
  options.initialValue = options.initialValue || [0, 0];
  options.maxSteps = options.maxSteps || 100;
  options.precision = options.precision || 0.001;

  var gradF = gradient(F);
  var lastValue = [1 / 0, 1 / 0];
  var currentValue = options.initialValue.map(x => x);
  var hasConverged = () => {
    var delta = V.subtract(currentValue, lastValue);
    return V.dot(delta, delta) < options.precision;
  };

  for(var i = 0; i < options.maxSteps && !hasConverged(); i++) {
    lastValue = currentValue.map(x => x);
    currentValue = V.subtract(currentValue, V.scale(gradF(currentValue), options.gamma));
  }

  return currentValue;
};
