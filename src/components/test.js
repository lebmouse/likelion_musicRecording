let y = [];
let startY = new Date().getFullYear();
console.log(startY);

let d = new Date(startY, 0, 1),
    year = d.getFullYear(),
    month = d.getMonth(),
    date = d.getDate(),
    day = d.getDay();

console.log(`d: ${d}, year :${year}, month :${month}, date:${date}, day:${day}`);
console.log('--------------------------------------\n\n');
for (let i = day; i < day + 420; i++) {
    //초기 년도
    let len = 32 - new Date(year, month++, 32).getDate();
    // console.log(len + '\n');
    if (date > len) {
        date = 0;
    }
    y[i] = date++;
}

console.log(y);