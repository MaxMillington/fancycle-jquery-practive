$(document).ready(function(){

    $('#justin').click(function(){

        var song = $('#baby'),
            counter = song.find('#view-counter').text();
        hideSong(song);
        increaseCount(song, counter);
        colorize('#baby');
        increase('#baby');
        decrease('#baby');

    });
    $('#selena').click(function(){
        var song = $('#come-and-get-it'),
            counter = song.find('#view-counter').text();
        hideSong(song);
        increaseCount(song, counter);
        colorize('#come-and-get-it');
        increase('#come-and-get-it');
        decrease('#come-and-get-it');
    });

    $('#miley').click(function(){
        var song = $('#wrecking-ball'),
            counter = song.find('#view-counter').text();
        hideSong(song);
        increaseCount(song, counter);
        colorize('#wrecking-ball');
        increase('#wrecking-ball');
        decrease('#wrecking-ball');
    });

    function hideSong(song) {
        song.toggleClass('hidden');
    };

    function increaseCount(song, counter) {
        if (song.attr('class') === 'song') {
            counter ++;
            song.find('#view-counter').text(counter);
        };
    };

    function colorize(id) {
        $(id).find('#colorize').click(function () {
            $(id).toggleClass('special-colors');
        });
    };

    function increase(id) {
        $(id).find('#increase-text-size').click(function () {
            $('.song').addClass('increase-size')
        });
    };

    function decrease(id) {
        $(id).find('#decrease-text-size').click(function () {
            $('.song').removeClass('increase-size')
        });
    };

});



