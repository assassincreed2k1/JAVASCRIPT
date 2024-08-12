
let jsonData = '[{"rank":"9","content":"Alone","UID":"5"},{"rank":"6","Content":"Tala","UID":"6"}]';

$.ajax({
    url: '/echo/json/',  // cái này chưa dùng được
    type: 'POST',
    data: {
        json: jsonData
    },
    success: function (response) {
        let trHTML = '';
        $.each(response, function (i, item) {
            trHTML += `
            <tr>
                <td>${item.rank}</td>
                <td>${item.content}</td>
                <td>${item.UID}</td>
            </tr>`;
        });
        console.log(trHTML);
    }
})



