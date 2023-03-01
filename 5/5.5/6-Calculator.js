function Calculator() {

    this['+'] = (a, b) => a + b;
    this['-'] = (a, b) => a - b;

    this.calculate = function(str) {

        let arr = str.split(' ');

        let a = +arr[0];
        let operator = arr[1];
        let b = +arr[2];

        if (isNaN(a) || isNaN(b) || this[operator] == undefined) return NaN;
    
        return this[operator](a, b);
        
    };

    this.addMethod = function(name, func) {
        this[name] = func;
    };

}


let calc = new Calculator;

console.log( calc.calculate("3 + 7") ); // 10

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
//powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
console.log( result ); // 8