/*
In JavaScript, write a function that takes an array as input that can
contain both ints and more arrays (which can also contain an array or int)
and return the flattened array.
ex. [1, [2, [ [3, 4], 5], 6]] = [1, 2, 3, 4, 5, 6]

*/

var flatten = function (input, result) {
  var result = result || [];
  input.forEach(function (val) {
    if (Array.isArray(val)) {
      flatten(val, result);
    } else {
      result.push(val);
    }
  })
  return result;
};
