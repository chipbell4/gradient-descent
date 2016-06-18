var expect = require('chai').expect;
var derivative = require('../derivative');

describe('derivative', function() {
  it('should be fairly accurate', function() {
    var F = x => x * x;
    var dF = derivative(F);

    expect(dF(0)).to.be.closeTo(0, 0.001);
    expect(dF(1)).to.be.closeTo(2, 0.001);
    expect(dF(2)).to.be.closeTo(4, 0.001);
  });
});
