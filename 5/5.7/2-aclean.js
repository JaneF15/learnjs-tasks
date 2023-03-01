function aclean(arr) {

    let map = new Map();

    for(let str of arr) {

        let sortedStr = sort(str);

        map.set(sortedStr, str);
        
    }

    return Array.from(map.values());
}

function sort(str) {
    return str.toLowerCase().split('').sort((a, b) => a.localeCompare(b)).join('');
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"