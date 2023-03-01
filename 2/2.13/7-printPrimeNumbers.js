function printPrimeNumbers(n) {

    for(let i = 2; i <= n; i++) {
        if (isPrime(i)) console.log(i);
    }

}

function isPrime(n) {

    if (n == 2) return true;

    if (n % 2 == 0) return false;

    for (let i = 3; i <= Math.sqrt(n); i+=2) {
        if (n % i == 0) return false;
    }

    return true;

}

printPrimeNumbers(10);