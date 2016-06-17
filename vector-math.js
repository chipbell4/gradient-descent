// Adds vectors
module.exports.add = function(P1, P2) {
  return { x: P1.x + P2.x, y: P1.y + P2.y };
};

// scales vectors
module.exports.scale = function(P1, s) {
  return { x: P1.x * s, y: P1.y * s };
};

// subtracts vectors
module.exports.subtract = function(P1, P2) {
  return this.add(P1, this.scale(P2, -1));
};

// dot product
module.exports.dot = function(P1, P2) {
  return P1.x * P2.x + P1.y * P2.y;
};

