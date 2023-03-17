function sum(a) {

  let currSum = a;

  function func(b) {
    currSum += b;
    return func;
  }

  func.toString = function() {
    return currSum;
  };

  return func;
}

console.log( sum(1)(2).toString() ); // 3
console.log( sum(5)(-1)(2).toString() ); // 6
console.log( sum(6)(-1)(-2)(-3).toString() ); // 0
console.log( sum(0)(1)(2)(3)(4)(5).toString() ); // 15