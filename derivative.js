var V = require('./vector-math');

module.exports = function(F, options) {
  options = options || {};
  var dt = options.dt || 0.0001;

  return function(t) {
    var left2 = F(t - 2 * dt);
    var left1 = F(t - dt);
    var right1 = F(t + dt);
    var right2 = F(t + 2 * dt);

    return (left2 - 8 * left1 + 8 * right1 - right2) / 12 / dt;
  };
};
