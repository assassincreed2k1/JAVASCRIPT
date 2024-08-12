console.log('Hello world from HTML');

let arr_top_4 = ['Liver', 'Chelsea', 'Mu', 'Man city']

let i = 0;
while (i < arr_top_4.length) {
    if (i % 2 == 0)
        console.log(i + 1, arr_top_4[i]);
    i++;
}
i = 0;
while (i < arr_top_4.length) {
    if (arr_top_4[i].length == 5) {
        console.log(i + 1, arr_top_4[i]);
        i++;
        continue;  // Nếu để continue ở đây thì cần đặt i++ lên trên vì code sẽ lặp vô hạn
    }
    else if (arr_top_4[i].length == 2) {
        console.log(i + 1, arr_top_4[i]);
        break;
    }
    i++;
}
