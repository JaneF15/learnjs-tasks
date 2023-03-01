function formatDate(date) {

    let now = new Date();
    let diff = now - date;

    let dateStr = function() {
        let year = date.getFullYear().toString().slice(-2);

        let month = date.getMonth() + 1;
        if (month < 10) month = '0' + month;

        let day = date.getDate();
        if (day < 10) day = '0' + day;

        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        let minutes = date.getMinutes();
        if (minutes < 10) minutes = '0' + minutes;

        return day + '.' + month + '.' + year + ' ' + hours + ':' + minutes;

    };

    let result = (diff < 1000) ? `прямо сейчас` :
        (diff < 60 * 1000) ? `${diff / 1000} сек. назад` :
        (diff < 60 * 60 * 1000) ? `${diff / 60 / 1000} мин. назад` : 
        dateStr();

    return result;    

}

console.log( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

console.log( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// вчерашняя дата 
console.log( formatDate(new Date(new Date - 86400 * 1000)) );