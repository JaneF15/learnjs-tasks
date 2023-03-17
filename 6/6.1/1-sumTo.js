function sumToFor(n) {

  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  return sum;

}

console.log(sumToFor(100));

function sumToRecursion(n) {
  if (n == 1) {
    return 1;
  } else {
    return n + sumToRecursion(n - 1);
  }
}

console.log(sumToRecursion(100));

function sumToArithmeticProgression(n) {

  return n * (n + 1) / 2;

}

console.log(sumToArithmeticProgression(100));