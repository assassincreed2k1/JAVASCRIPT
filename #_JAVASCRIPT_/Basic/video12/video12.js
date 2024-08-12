// Kiểu object hơi giống với struct nhưng dễ hơn nhiều


console.log("Hello world from HTML");

//key: value
let a =
{
    name: 'Eric',
    address: 'Ha Noi',
    text: 'name'
};
JSON
"{name: 'Eric', address: 'Ha Noi'}"

let b = 'name';
let obj = 
    { name: 'Harry' };
    obj[a.text] = 'Potter' //  a.text = b
console.log('what is your name? ', `My name's: `, a.name);
console.log('Where are you from? ', `I'm from: `, a[`address`]);
console.log('My name is: ', obj[b])  //  a.text = b
