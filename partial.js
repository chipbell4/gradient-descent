var derivative = require('./derivative');

module.exports = (F, index) => {
  return vector => {
    var D = derivative(x => {
      var cloned = vector.map(a => a);
      cloned[index] = x;
      return F(cloned);
    });

    return D(vector[index]);
  };
};
