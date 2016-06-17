var V = require('./vector-math');
var derivative = require('./derivative');

module.exports = function(curve1, curve2) {
  // create a function that obtains the distance at any provided t1 and t2
  var distance = (t1, t2) => {
    var p1 = curve1(t1);
    var p2 = curve2(t2);
    var direction = V.subtract(p1, p2);
    return V.dot(direction, direction);
  }

  // pick an initial starting point
  var best = { t1: 0, t2: 0, d: 1 / 0 };
  for(var t1 = 0; t1 <= 1.0; t1 += 0.1) {
    for(var t2 = 0; t2 <= 1.0; t2 += 0.1) {
      var newDistance = distance(t1, t2);
      if(newDistance < best.d) {
        best.t1 = t1;
        best.t2 = t2;
        best.d = newDistance;
      }
    }
  }

  return best;
};
