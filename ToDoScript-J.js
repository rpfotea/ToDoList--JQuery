$(document).ready(function () {
    $('.addBtn').on('click', function (e) {
        e.preventDefault();
        var text = $('#myInput').val();
        if (text === '') {
            alert("You must write something!");
        } else {
            $('#myList').append('<li class=c1>' + '<input type="checkbox" /> ' + text + '</li>');
            $('#myInput').val('');
        }

    });
});


$(document).ready(function () {
    $(document).on('change', '.c1 input', function () {
        var line = $(this).parent();
        var text = line.text();
        line.remove();
        $('#myList').append('<li class=c2>' + '<input type="checkbox" /> ' + text + '</li>');
        $(".c2 input").prop('checked', true);
    });
});

$(document).ready(function () {
    $(document).on('change', '.c2 input', function () {
        var line = $(this).parent();
        var text = line.text();
        line.remove()
        $('#myList').prepend('<li class=c1>' + '<input type="checkbox" /> ' + text + '</li>');
        
    });
});

