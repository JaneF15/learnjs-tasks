function fib(n) {

  if (n <= 2) return 1;

  let prevPrevious = 1, previous = 1, current;

  for (let i = 3; i <= n; i++) {
    current = prevPrevious + previous;

    prevPrevious = previous;
    previous = current;
  }

  return current;
  
}

console.log(fib(77) === 5527939700884757);