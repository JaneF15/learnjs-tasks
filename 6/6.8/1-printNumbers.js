function printNumbersInterval(from, to) {

  let curr = from;

  let timerId = setInterval(function() {
    console.log(curr);

    if (curr == to) {
      clearInterval(timerId);
    }
    curr++;
  }, 1000);
}


function printNumbersTimeout(from, to) {

  let curr = from;

  setTimeout(function run() {
    console.log(curr);

    if (curr != to) {
      setTimeout(run, 1000);
    }
    curr++;
  }, 1000);
}

//printNumbersInterval(5, 10);
printNumbersTimeout(5, 10);