$(
    function(){
        $('#twitter-popup').click(function(event) {

            var width  = 500,
                height = 400,
                left   = ($(window).width()  - width)  / 2,
                top    = ($(window).height() - height) / 2,
                url    = encodeURI("http://twitter.com/share?text=What you should do this Christmas morning - &via=septerr"),
                opts   = 'status=1' +
                    ',width='  + width  +
                    ',height=' + height +
                    ',top='    + top    +
                    ',left='   + left;
            window.open(url, 'twitter', opts);

            return false;
        });
    }
);