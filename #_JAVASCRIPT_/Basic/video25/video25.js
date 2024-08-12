console.log('Hello everyone');

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


//filter
let filter = arr.filter((item, index) => {
    console.log('>>>check filter: item:', item, 'index:', index);
    return item && item >5;
});

console.log(filter);

//more:
let arr_2 = [
    { name: 'Nghia', age: 19 },
    { name: 'Tho', age: 19 },
    { name: 'Bang', age: 20 },
    { name: 'Tony', age: 38 },
];
let filter_age = arr_2.filter((item, index) => {
    return item && item.age===19;
});
console.log(filter_age);


//FIND
let find_age = arr_2.find((item, index) => {
    return item && item.age === 19;
});
console.log(find_age);  // just print the first result, 