function shuffle(array) {

    for (let i = array.length - 1; i > 0; i--) {
        let r = Math.floor(Math.random() * (i + 1));

        let tmp = array[i];
        array[i] = array[r];
        array[r] = tmp;
    }

}

let arr = [1, 2, 3];

shuffle(arr);

console.log(arr);