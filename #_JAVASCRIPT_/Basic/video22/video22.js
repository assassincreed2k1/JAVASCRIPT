console.log(`Nguyen Trung Nghia is here`)

function sum(a, b)
{
    return a + b;
}

// arrow function
let sum_2 = (a, b) =>
{
    return a + b;
}

let compare = (a, b) => {
    return a == b;
}

console.log('Sum a + b =', sum_2(6, 9));
console.log('Sum c + d:', sum(10, 11));
console.log('Check: a == b', compare(6, 9));


