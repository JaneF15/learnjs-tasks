function topSalary(salaries) {

    let topWorker = null, topSalary = 0;

    for (let [key, value] of Object.entries(salaries)){

        if (value > topSalary) {
            [topWorker, topSalary] = [key, value];
        }
        
    }

    return topWorker;
    
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

console.log(topSalary(salaries)); // Pete

console.log(topSalary({})); // null