console.log('Function Reduce');

let arr = [
    { name: 'Nghia', age: 19 },
    { name: 'Tho', age: 19 },
    { name: 'Trang', age: 18 },
]


// Use arr_new_2 with type Object
let arr_new = arr.reduce((previousValue, currentValue) => {
    previousValue.names.push(currentValue.name);
    previousValue.ages.push(currentValue.age);
    return previousValue;
}, { names: [], ages: [] });

console.log(arr_new, typeof arr_new);


// Use arr_new_2 with type Array
let arr_new_2 = arr.reduce((previousValue, currentValue) => {
    previousValue.push(currentValue);
    return previousValue;
}, []);

console.log(arr_new_2, typeof arr_new_2);


// Use Reduce with type Array_2
let arr_new_3 = arr.reduce((pre, cur) => {
    if (cur.age === 19) {
        pre.push(cur.name);
    }
    return pre;
}, [])

console.log(arr_new_3, typeof arr_new_3);


//Use Reduce with type Number or Int
let arr_num = [1, 2, 3, , 4, 5, 6, , 7, 8, 9];
let arr_new_4 = arr_num.reduce((pre, cur) => {
    if (cur !== undefined) {
        return pre + cur;
    }
    return pre;
}, 0);
console.log(arr_new_4, typeof arr_new_4)


//Use reduce to compare 
let arr_new_5 = arr_num.reduce((max, cur) => {
    if (cur > max) {
        max = cur;
    }
    return max;
}, 0);
console.log(arr_new_5, typeof arr_new_5)


//Or we can use:
let arr_new_6 = arr_num.reduce((max, cur) => {
    if (cur != undefined) {
        return cur > max ? cur : max;
    }
    return max;
}, 0);
console.log(arr_new_6);



// EG from SGK:
const array = [15, 16, 17, 18, 19];

function reducer(accumulator, currentValue, index) {
  const returns = accumulator + currentValue;
  console.log(
    `accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`,
  );
  return returns;
}

array.reduce(reducer);
