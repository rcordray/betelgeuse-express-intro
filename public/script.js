console.log('script has been sourced');

var geese = [{
        name: 'Fred',
        age: 5,
        type: 'Goose'
    },
    {
        name: 'Carla',
        age: 4,
        type: 'Canadian'
    }
];
$('#tableBody').empty();
for (var i = 0; i < geese.length; i++) {
    var goose = geese[i];

}

$(document).ready(function() {

    drawGeeseTable();

    $('#newGooseButton').on('click', function() {
        var newGoose = {};
        newGoose.name = $('#newGooseName').val();
        newGoose.age = $('#newGooseAge').val();
        newGoose.type = $('#newGooseType').val();


        geese.push(newGoose);
        drawGeeseTable();
    })

    function drawGeeseTable() {
        $('#tableBody').empty();
        for (var i = 0; i < geese.length; i++) {
            var goose = geese[i];

        }
        $('#tableBody').prepend(
            '<tr>' +
            '<td>' + goose.name + '</td>' +
            '<td>' + goose.age + '</td>' +
            '<td>' + goose.type + '</td>' +
            '</tr>'
        )
    }


    drawGeeseTable();

});