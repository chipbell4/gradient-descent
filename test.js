var assert = require('assert');
var V = require('./vector-math');
var derivative = require('./derivative');
var closestApproach = require('./index');

var closeTo = (expected, actual, message) => {
  assert(Math.abs(expected - actual) < 0.001, message || 'expected ' + expected + ', got ' + actual);
}
var vectorsClose = (expected, actual) => {
  var delta = V.subtract(actual, expected);
  closeTo(V.dot(delta, delta), 0);
};

var derivativeTest = (F, t, expected) => {
  var dF = derivative(F);
  var actual = dF(t);
  vectorsClose(expected, actual);
};

// basic line
var line = t => [t, t];
derivativeTest(line, 0, [1, 1]);
derivativeTest(line, 1, [1, 1]);

// parabola
var parabola = t => [t*t, t*t];
derivativeTest(parabola, 0, [0, 0]);
derivativeTest(parabola, 1, [2, 2]);
derivativeTest(parabola, 2, [4, 4]);

var approachTest = (F1, F2, expectedT1, expectedT2) => {
  var result = closestApproach(F1, F2);
  closeTo(result.t1, expectedT1, 'For t1, expected ' + expectedT1 + ' got ' + result.t1);
  closeTo(result.t2, expectedT2, 'For t2, expected ' + expectedT2 + ' got ' + result.t2);
};
var F1, F2;

// two lines that intersect
F1 = t => [t, 0]
F2 = t => [0, 1 - t]
approachTest(F1, F2, 0, 1);

// two parabolas that are nearby (a frown and a smile)
F1 = t => [t, t * (1 - t)];
F2 = t => [t, 3 - t * (1 - t)];
approachTest(F1, F2, 0.5, 0.5);
