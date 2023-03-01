function getLocalDay(date) {

    let day = date.getDay();

    return (day == 0) ? 7 : day;
    
}

let date = new Date("2012-01-03");  // 3 января 2012 года
console.log( getLocalDay(date) );       // вторник, нужно показать 2