var V = require('./vector-math');

module.exports = function(F, dt) {
  dt = dt || 0.001;

  var dF = function(t) {
    var left2 = scale(F.get(t - 2 * dt), 1 / 12);
    var left1 = scale(F.get(t - dt), -2 / 3);
    var right1 = scale(F.get(t + dt), 2 / 3);
    var right2 = scale(F.get(t + 2 * dt), -1 / 12);

    return scale(add(add(left2, left1), add(right2, right1)), 1 / dt);
  };

  return { get: dF };
};
