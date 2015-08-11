$(document).ready(function(){
    $('#justin').click(function(){
        var song = $('#baby'),
            counter = song.find('#view-counter').text();
        song.toggleClass('hidden');
        if (song.attr('class') === 'song') {
            counter ++;
            $('#baby').find('#view-counter').text(counter);
        }
    });
});
