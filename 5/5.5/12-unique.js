function unique(arr) {

    let resArr = [];

    for (let str of arr) {
        if (!resArr.includes(str)) {
            resArr.push(str);
        }
    }
    return resArr;
}

let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
];

console.log( unique(strings) ); // кришна, харе, :-O