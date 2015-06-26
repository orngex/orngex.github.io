/* ========================================================================= */
/*  Preloader Script
 /* =========================================================================

 window.onload = function () {
 document.getElementById('loading-mask').style.display = 'none';
 } */

$(function(){
    /* ========================================================================= */
    /*  Menu item highlighting
     /* ========================================================================= */

    jQuery(window).scroll(function () {
        if (jQuery(window).scrollTop() > 400) {
            jQuery("#navigation").css("background-color","rgba(210, 50, 50, 0.95)");
            jQuery("#navigation").addClass("animated-nav");
        } else {
            jQuery("#navigation").css("background-color","transparent");
            jQuery("#navigation").removeClass("animated-nav");
        }
    });

    $('#nav').onePageNav({
        filter: ':not(.external)',
        scrollSpeed: 950,
        scrollThreshold: 1
    });

    // Slider Height
    var slideHeight = $(window).height();
    $('#home-carousel .carousel-inner .item, #home-carousel .video-container').css('height',slideHeight);

    $(window).resize(function(){'use strict',
        $('#home-carousel .carousel-inner .item, #home-carousel .video-container').css('height',slideHeight);
    });

    // portfolio filtering

    $("#projects").mixItUp();

    //fancybox

    $(".fancybox").fancybox({
        padding: 0,

        openEffect : 'elastic',
        openSpeed  : 650,

        closeEffect : 'elastic',
        closeSpeed  : 550,
    });


    /* ========================================================================= */
    /*  Facts count
     /* ========================================================================= */

    "use strict";
    $(".fact-item").appear(function () {
        $(".fact-item [data-to]").each(function () {
            var e = $(this).attr("data-to");
            $(this).delay(6e3).countTo({
                from: 50,
                to: e,
                speed: 3e3,
                refreshInterval: 50
            })
        })
    });

    /* ========================================================================= */
    /*  On scroll fade/bounce fffect
     /* ========================================================================= */

    $("#testimonial").owlCarousel({
        pagination : true, // Show bullet pagination
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true
    });

});

/* ========================================================================= */
/*  On scroll fade/bounce fffect
 /* ========================================================================= */

wow = new WOW({
    animateClass: 'animated',
    offset: 100,
    mobile: false
});
wow.init();

/* ---------------------------------------------------------------------- */
/*      Progress Bars
 /* ---------------------------------------------------------------------- */

initProgress('.progress');

function initProgress(el){
    jQuery(el).each(function(){
        var pData = jQuery(this).data('progress');
        progress(pData,jQuery(this));
    });
}



function progress(percent, $element) {
    var progressBarWidth = 0;

    (function myLoop (i,max) {
        progressBarWidth = i * $element.width() / 100;
        setTimeout(function () {
            $element.find('div').find('small').html(i+'%');
            $element.find('div').width(progressBarWidth);
            if (++i<=max) myLoop(i,max);
        }, 10)
    })(0,percent);
}

(function movie_read(){

    //ko.applyBindings(myViewModel);
    //
    //var myViewModel = {
    //    personName: 'Bob',
    //    personAge: 123
    //};

    var files = evt.target.files; // FileList object

    // files is a FileList of File objects. List some properties.
    var output = [];
    for (var i = 0, f; f = files[i]; i++) {
        output.push('<li><strong>', escape(f.name), '</strong> (', f.type || 'n/a', ') - ',
            f.size, ' bytes, last modified: ',
            f.lastModifiedDate ? f.lastModifiedDate.toLocaleDateString() : 'n/a',
            '</li>');
    }
    document.getElementById('list').innerHTML = '<ul>' + output.join('') + '</ul>';

document.getElementById('files').addEventListener('change', handleFileSelect, false);


    var ViewModel = function(first, last) {
        this.firstName = ko.observable(first);
        this.lastName = ko.observable(last);

        this.fullName = ko.pureComputed(function() {
            // Knockout tracks dependencies automatically. It knows that fullName depends on firstName and lastName, because these get called when evaluating fullName.
            return this.firstName() + " " + this.lastName();
        }, this);
    };

    ko.applyBindings(new ViewModel("Planet", "Earth"));

    $.ajax({
        url : 'json/movie.json',
        success : function (data) {
            console.log(data);
            $('#jsonData').html(JSON.stringify(data));
            //data.forEach();
        }
    });
})();