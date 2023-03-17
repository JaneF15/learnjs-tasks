function printListWhile(list) {

  let current = list;

  while (current != null) {

    console.log(current.value);
    current = current.next;

  }

}

function printListRecursion(list) {

  if (list.next == null) {
    console.log(list.value);
    return;
  }

  console.log(list.value);
  printListRecursion(list.next);

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

console.log(printListWhile(list));

console.log(printListRecursion(list));
