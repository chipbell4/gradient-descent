var assert = require('assert');
var derivative = require('./derivative');
var closestApproach = require('./index');

var closeTo = (expected, actual, message) => {
  assert(Math.abs(expected - actual) < 0.001, message || 'expected ' + expected + ', got ' + actual);
}
var vectorsClose = (expected, actual) => {
  closeTo(expected.x, actual.x);
  closeTo(expected.y, actual.y);
};

var derivativeTest = (F, t, expected) => {
  var dF = derivative(F);
  var actual = dF(t);
  vectorsClose(expected, actual);
};

// basic line
var line = t => ({ x: t, y: t });
derivativeTest(line, 0, { x: 1, y: 1});
derivativeTest(line, 1, { x: 1, y: 1});

// parabola
var parabola = t => ({ x : t*t, y: t*t });
derivativeTest(parabola, 0, { x: 0, y: 0 });
derivativeTest(parabola, 1, { x: 2, y: 2 });
derivativeTest(parabola, 2, { x: 4, y: 4 });

var approachTest = (F1, F2, expectedT1, expectedT2) => {
  var result = closestApproach(F1, F2);
  closeTo(result.t1, expectedT1, 'For t1, expected ' + expectedT1 + ' got ' + result.t1);
  closeTo(result.t2, expectedT2, 'For t2, expected ' + expectedT2 + ' got ' + result.t2);
};
var F1, F2;



// two lines that intersect
F1 = t => ({ x: t, y : 0 })
F2 = t => ({ x: 0, y : 1 - t })
approachTest(F1, F2, 0, 1);

// two parabolas that are nearby (a frown and a smile)
F1 = t => ({ x: t, y : t * (1 - t) });
F2 = t => ({ x: t, y : 3 - t * (1 - t) });
approachTest(F1, F2, 0.5, 0.5);
