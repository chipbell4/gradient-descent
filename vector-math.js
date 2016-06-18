var zip = (A, B) => {
  var zipped = [];
  for(var i = 0; i < A.length; i++) {
    zipped.push([ A[i], B[i] ]);
  }
  return zipped
}

var arraySum = A => {
  return A.reduce((sum, value) => sum + value, 0);
};

// Adds vectors
module.exports.add = function(P1, P2) {
  return zip(P1, P2).map(value => value[0] + value[1]);
};

// scales vectors
module.exports.scale = function(P1, s) {
  return P1.map(value => value * s);
};

// subtracts vectors
module.exports.subtract = function(P1, P2) {
  return this.add(P1, this.scale(P2, -1));
};

// dot product
module.exports.dot = function(P1, P2) {
  return arraySum(zip(P1, P2).map(value => value[0] * value[1]));
};

