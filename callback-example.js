function exampleCallback(a, b) {
  return(a + b);
}

function one(a, b, callback) {
  return callback(a, b);
}

// 기존에 있던 함수를 콜백함수로 활용한 경우
let testOne = one(1, 2, exampleCallback) 
console.log(testOne);

function two(a, b, callback) {
  return callback(a, b);
}

// 호출할 때 함수를 작성해주는 경우 -> 일반적인 콜백함수 방식
let testTwo = two(2, 3, function(a, b) {
  return a - b;
});
console.log(testTwo);
