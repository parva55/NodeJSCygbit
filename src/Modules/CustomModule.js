// create a custom module with some functions and export it
const a = {
  add: (x, y) => {
    return x + y;
  },
  subtract: (x, y) => {
    return x - y;
  },
  multiply: (x, y) => {
    return x * y;
  },
  divide: (x, y) => {
    return x / y;
  },
};
const b = {
  average: (x, y) => {
    return (x + y) / 2;
  },
  percent: (x, y) => {
    return (x / y) * 100;
  },
};

module.exports = { a, b };
