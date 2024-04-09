$(document).ready(function() {
    $('.delete').on('click', fDeleteRow);
    $('.delete').on('mouseover', fMousePointer);
    $('#even, #odd').on('change', fAlternateRow);
});



function fMousePointer() {
    $(this).css('cursor', 'pointer');
}



function fAlternateRow() {
    $('tbody tr:odd').css('background-color', $('#even').val());
    $('tbody tr:even').css('background-color', $('#odd').val());
}


function fDeleteRow() {
    let tr = $(this).closest('tr');
    tr.fadeOut(2000, function() {
        tr.remove();
        fAlternateRow();
    });
}

fAlternateRow(); 
