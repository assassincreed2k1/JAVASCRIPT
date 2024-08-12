console.log('Hello, I am Nghia');
// Not use Callback
function sum(a, b) {
    return a + b;
}
console.log('a+b=', sum(9, 16));


//Using callback (1)
let gpa = (a, b, c, callback) => {
    let g = (a + b + c) * 4 / 30;
    callback(g);
}

let mess = (massage) => {
    console.log('GPA:', massage);
}

gpa(8, 9, 10, mess);


//Test: same (1)
let gpa_2 = (a, b, c) => {
    let g = (a + b + c) * 4 / 30;
    mess_2(g);
}

let mess_2 = (massage) => {
    console.log('GPA:', massage);
}

gpa_2(8, 9, 10, mess_2);


// Set time_out
let result = (a, b, c, callback) => {
    let s = a + b + c;
    setTimeout(() => {
        callback(s);
    }, 2000)
}

let mes = (mess) => {
    console.log('Tong:', mess);
}

result(1, 2, 3, mes);


// Set Interval
let result_2 = (a, b, c, callback) => {
    let s = a + b + c;
    let i = 0;
    let timer = setInterval(() => {
        if (i == 5) {
            clearInterval(timer);
        }
        callback(s);
        i++;
    }, 1500)
}

result_2(3, 4, 5, mes)


// => Because JavaScript is an asynchronous language, so result_2 run before result