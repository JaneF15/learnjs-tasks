function getWeekDay(date) {

    let daysOfWeek = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];

    return daysOfWeek[date.getDay()];
}

let date = new Date("2012-01-03");  // 3 января 2012 года

console.log( getWeekDay(date) );        // нужно вывести "ВТ"