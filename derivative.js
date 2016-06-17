var V = require('./vector-math');

module.exports = function(F, options) {
  options = options || {};
  var dt = options.dt || 0.001;

  var dF = function(t) {
    var left2 = V.scale(F(t - 2 * dt), 1 / 12);
    var left1 = V.scale(F(t - dt), -2 / 3);
    var right1 = V.scale(F(t + dt), 2 / 3);
    var right2 = V.scale(F(t + 2 * dt), -1 / 12);

    return V.scale(V.add(V.add(left2, left1), V.add(right2, right1)), 1 / dt);
  };

  return { get: dF };
};
