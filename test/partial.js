var expect = require('chai').expect;
var partial = require('../partial');

describe('partial', function() {
  var F = vector => vector[0] * vector[0] * vector[1];

  it('should work properly with the first index', function() {
    var dFx = partial(F, 0);
    expect(dFx([1, 2])).to.be.closeTo(4, 0.001);
    expect(dFx([0, 2])).to.be.closeTo(0, 0.001);
    expect(dFx([1, 4])).to.be.closeTo(8, 0.001);
  });

  it('should work properly with the second index', function() {
    var dFy = partial(F, 1);
    expect(dFy([1, 0])).to.be.closeTo(1, 0.001);
    expect(dFy([1, 1])).to.be.closeTo(1, 0.001);
    expect(dFy([2, 1])).to.be.closeTo(4, 0.001);
  });
});
