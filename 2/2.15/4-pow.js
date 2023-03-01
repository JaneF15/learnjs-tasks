function pow(x, n) {

    if (n < 1) return null;
    
    let res = 1;
    for (let i = 0; i < n; i++) {
        res *= x;
    }
    return res;
}

console.log(pow(3, 2)) // 3 * 3 = 9
console.log(pow(3, 3)) // 3 * 3 * 3 = 27
console.log(pow(1, 100)) // 1 * 1 * ...* 1 = 1