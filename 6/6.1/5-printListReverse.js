function printListReverseWhile(list) {

  let current = list;
  let arrOfValues = [];

  while (current != null) {

    arrOfValues.push(current.value);
    current = current.next;

  }

  for (let i = arrOfValues.length - 1; i >= 0; i--) {
    console.log(arrOfValues[i]);
  }

}

function printListReverseRecursion(list) {

  if (list.next != null) {
    printListReverseRecursion(list.next);
  }

  console.log(list.value);

}

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

console.log(printListReverseWhile(list));

console.log(printListReverseRecursion(list));