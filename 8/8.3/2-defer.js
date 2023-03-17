Function.prototype.defer = function(ms) {

  return (a, b) => setTimeout(this, ms, a, b);
  
}

function f(a, b) {
  console.log( a + b );
}

f.defer(1000)(1, 2); // выведет 3 через 1 секунду.
