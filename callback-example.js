function exampleCallback(a, b) {
  return a + b;
}

function one(a, b, callback) {
  return callback(a, b);
}

exampleCallback(one)