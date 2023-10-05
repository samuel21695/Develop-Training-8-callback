function exampleCallback(a, b) {
  console.log(a + b);
}

function one(a, b, callback) {
  return callback(a, b);
}

one(1, 3, exampleCallback)