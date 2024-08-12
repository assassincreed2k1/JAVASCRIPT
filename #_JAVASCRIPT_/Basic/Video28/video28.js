console.log('My name is Nghĩa. Welcome to function Sort()');

let arr = [13, 6, 100, 51, 8, 4, 43];
arr.sort();
console.log('Sort() bt Alphabet:',arr);  //Sort() bt Alphabet


// use Sort() right way:
let arr_2 = [13, 6, 100, 51, 8, 4, 43];
arr_2.sort((item_1, item_2) => {
    console.log('Compare between', item_1, item_2);
    return item_1 - item_2;
});
console.log('Sort() right way:', arr_2);


// use Sort() big to small:
let arr_3 = [13, 6, 100, 51, 8, 4, 43];
arr_3.sort((item_1, item_2) => {
    return item_2 - item_1;
});
console.log('Sort() big to small:', arr_3);


// Sort()  Array:
console.log('Sort Array:');
let arr_4 = [
    { name: 'Bang', age: 20 },
    { name: 'Nghia', age: 19 },
    { name: 'Tho', age: 18 },
    { name: 'Chien', age: 30 },
];
arr_4.sort((first, second) => {
    return first.age - second.age;
});
console.log(arr_4);
