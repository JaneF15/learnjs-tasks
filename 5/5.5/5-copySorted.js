function copySorted(arr) {
    return arr.slice().sort( (a, b) => a.localeCompare(b) );
}

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

console.log( sorted ); // CSS, HTML, JavaScript
console.log( arr ); // HTML, JavaScript, CSS (без изменений)