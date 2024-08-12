console.log('Hello world from Nguyen Trung Nghia');

let a =  new Date().getDay();
let day = '';
switch(a)
{
    case 0:
        day = 'Sun';
        break;
    case 1:
        day = 'Mon';
        break;
    case 2:
        day = 'Tue';
        break;
    case 3: 
        day = 'Wed';
        break;
    case 4:
        day = 'Thur';
        break;
    case 6:
        day = 'Sat';
        break;
    case 5:
        day = 'Fri';
        break;
    default:
        day='Undefined';
}

console.log('Today is: ', day, a);
// NOTE: Nếu không có break thì nó sẽ chạy đến hết.