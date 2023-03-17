function throttle(f, ms) {

  let isWaiting = false;
  let lastCallArgs, lastThis;

  function wrapper() {
    
    if (isWaiting) {
      lastCallArgs = arguments;
      lastThis = this;
      return;
    }  

    isWaiting = true;

    f.apply(this, arguments);

    setTimeout(() => {
      isWaiting = false;

      if (lastCallArgs) {
        f.apply(lastThis, lastCallArgs);
        //wrapper.apply(lastThis, lastCallArgs);
        lastCallArgs = null;
        lastThis = null;
      }
    }, ms);
  }

  return wrapper;

}


function f(a) {
  console.log(a)
}

// f1000 передаёт вызовы f максимум раз в 1000 мс
let f1000 = throttle(f, 1000);

f1000(1); // показывает 1
f1000(2); // (ограничение, 1000 мс ещё нет)
f1000(3); // (ограничение, 1000 мс ещё нет)
// setTimeout(console.log, 1000, "");

// setTimeout(f1000, 100, 4);
// setTimeout(f1000, 100, 5);
// setTimeout(f1000, 700, 6);

// когда 1000 мс истекли ...
// ...выводим 3, промежуточное значение 2 было проигнорировано