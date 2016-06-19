var expect = require('chai').expect;
var gradient = require('../gradient');

describe('gradient', function() {
  it('should work properly with a function of one variable', function() {
    var F = vector => vector[0] * vector[0]; // f(x) = x^2, but using vectors
    var gradF = gradient(F);

    expect(gradF([0])[0]).to.closeTo(0, 0.001);
    expect(gradF([1])[0]).to.closeTo(2, 0.001);
    expect(gradF([2])[0]).to.closeTo(4, 0.001);
  });

  it('should work properly with more complex functions', function() {
    var F = vector => vector[0] * vector[0] * vector[1] // F = x^2 y
    var gradF = gradient(F);
    // gradF = (2xy, x^2)
    var results = gradF([1, 2]);
    expect(results[0]).be.closeTo(4, 0.001);
    expect(results[1]).be.closeTo(1, 0.001);
  });
});
