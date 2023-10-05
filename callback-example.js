function exampleCallback(a, b) {
  return(a + b);
}

function one(a, b, callback) {
  return callback(a, b);
}

// 기존에 있던 함수를 콜백함수로 활용한 경우
let testOne = one(1, 2, exampleCallback) 
console.log(testOne);
