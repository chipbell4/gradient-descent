// Adds vectors
var add = function(P1, P2) {
  return { x: P1.x + P2.x, y: P1.y + P2.y };
};

// scales vectors
var scale = function(P1, s) {
  return { x: P1.x * s, y: P1.y * s };
};

// subtracts vectors
var subtract = function(P1, P2) {
  return add(P1, scale(P2, -1));
};

// dot product
var dot = function(P1, P2) {
  return P1.x * P2.x + P1.y * P2.y;
};

var derivative = function(F, dt) {
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

module.exports = function(curve1, curve2) {

};
