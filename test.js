var assert = require('assert');
var derivative = require('./derivative');

var closeTo = (expected, actual, message) => {
  assert(Math.abs(expected - actual) < 0.001, message || 'expected ' + expected + ', got ' + actual);
}
var vectorsClose = (expected, actual) => {
  closeTo(expected.x, actual.x);
  closeTo(expected.y, actual.y);
};

var derivativeTest = (F, t, expected) => {
  var dF = derivative(F);
  var actual = dF.get(t);
  vectorsClose(expected, actual);
};

// basic line
var line = { get: t => ({ x: t, y: t }) };
derivativeTest(line, 0, { x: 1, y: 1});
derivativeTest(line, 1, { x: 1, y: 1});

// parabola
var parabola = { get: t => ({ x : t*t, y: t*t }) };
derivativeTest(parabola, 0, { x: 0, y: 0 });
derivativeTest(parabola, 1, { x: 2, y: 2 });
derivativeTest(parabola, 2, { x: 4, y: 4 });
