console.log('From NTN with luv')

// Review arrow function

let sum = (a, b) => {
    return a + b;
}
console.log('check sum: 9 + 6 =', sum(9, 15));


// function and method => reuse

let infor = {
    name: 'Nguyen Trung Nghia',
    age: 19,
    year: 5,
    goal: function () {
        return infor.age + this.year;
    },
    get_name: function (a, b) {
        return a + b;
    },
}
console.log('goal: ', infor.goal());
console.log('Name: ', infor.get_name('Nguyen Trung ', 'Nghia'));

