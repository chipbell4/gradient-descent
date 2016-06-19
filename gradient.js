var V = require('./vector-math');
var partial = require('./partial');

module.exports = function(F, delta) {
  return vector => {
    var result = [];
    for(var k = 0; k < vector.length; k++) {
      var dFk = partial(F, k);
      result.push(dFk(vector));
    }
    return result;
  };
};
