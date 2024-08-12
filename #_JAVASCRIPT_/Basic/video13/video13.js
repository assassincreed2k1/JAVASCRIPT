console.log('Hello world from HTML')
let a =
{
    name: 'Eric',
    age: '19',
};  //key: value  (on tap kieu du lieu Object)

console.log('data object: ', 'name: ', a.name, '; age: ', a.age)

let b = ['MU', 'Chelsea', 'Liverpool'];
// arr = [item1, item2, item3]
console.log('typeof b:', typeof b, b);
console.log(typeof a, a.name, a.age);
console.log('Gia tri 1: ', b[0]);
console.log('Gia tri 2: ', b[1]);
let arr =
{
    name: 'Harry',
    age: '22'
};
let c = [a, arr];
console.log(c[0], c[1]);

for (let i = 0; i < c.length; i++) {
    console.log(c[i].name);
}