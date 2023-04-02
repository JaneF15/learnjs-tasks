function* pseudoRandom(seed) { 

  let next = seed;

  for (let i = 1; i < Infinity; i++) {

    next = next * 16807 % 2147483647;
    yield next;
    
  }

}

let generator = pseudoRandom(1);

console.log(generator.next().value); // 16807
console.log(generator.next().value); // 282475249
console.log(generator.next().value); // 1622650073