var expect = require('chai').expect;
var gradientDescent = require('../gradient-descent');

describe('gradient-descent', function() {
  it('should converge to a local minimum of a quadratic', function() {
    var F = vector => Math.pow(vector[0] - 0.5, 2) + Math.pow(vector[1] - 0.7, 2);
    var result = gradientDescent(F, { maxSteps: 1000, gamma: 0.01, initialValue: [0, 0] });

    expect(result.length).to.equal(2);
    expect(result[0]).to.be.closeTo(0.5, 0.001);
    expect(result[1]).to.be.closeTo(0.7, 0.001);
  });
});
