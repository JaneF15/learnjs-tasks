function getDateAgo(date, days) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days).getDate();
}

let date = new Date("2015-01-02");

console.log( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
console.log( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
console.log( getDateAgo(date, 365) ); // 2, (2 Jan 2014)