console.log('Can Thi Anh Tho')

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < arr.length; i++){
    arr[i] = arr[i] * arr[i];
}

console.log('check value i:', arr);


//map: create a new array, do not change old array
let mapArr = arr.map((item, index) => {
    item = item * item;
    return item;
})

console.log('check value arr:', arr);
console.log('check value arr:', mapArr);

