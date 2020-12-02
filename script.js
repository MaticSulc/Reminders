var kategorije = ["Šola", "Zabava", "Delo"];
var vnos_index = 1;

function naloziKategorije(){
    $('.categories ul').html('');
    kategorije.forEach(function(el,i) {
        $('.categories ul').append(`<li class="category list-group-item" data-id=${i}>${el}<span></li>`);
    });
}

function updateIndex(){
    $('.table_entries')
}

$('.categories ul').on('click', '.category', function(){
    if($('.active').length > 0) $('.active').removeClass('active');
    $(this).addClass('active');
});

$('button.add_btn').click(function(){
    if($('.input_category').val() != ''){
        kategorije.push($('.input_category').val());
        $('.input_category').val("");
        naloziKategorije();
    }
});

$('button.remove_btn').click(function(){
    if($('.active').length > 0){
        let id = $('.active').data("id");
        kategorije.splice(id,1);
        naloziKategorije();
    }
});

$('.table_entries').on('click', 'tr.entryRow', function(){
    if($(this).hasClass('table-danger')) $(this).removeClass('table-danger');
    else $(this).addClass('table-danger');
});


$('.add_entry_btn').click(function(){
    if($('.active').length > 0 && $('.input_entry').val() != ''){
        $('.table_entries tbody').append(`<tr class="clickable-row entryRow col"><td>${vnos_index}</td><td>${$('.input_entry').val()}</td><td>${$('.active').text()}</td><td>${new Date().toLocaleString('sl-SI')}</td></tr>`)
        vnos_index++;
        $('.input_entry').val("");
    }
});

$('.remove_entry_btn').click(function(){
    if($('.table-danger').length > 0){
        $('.table-danger').remove();
        vnos_index--;
        let temp = 1;
        $('.entryRow').each(function(index, item){
            $(item).children().first().text(temp);
            temp++;
        });
    }
});

$(document).ready(function(){
    naloziKategorije();
});

    