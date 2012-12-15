// Slider v1.1
// http://wwww.sercaneraslan.com
$(function(){
    $.fn.selider = function(options){
        var i = 0,
            timing,
            el = $(this),
            imageCount = el.children().children().length,

            settings = $.extend({
                'height' : 400,
                'width'  : 400,
                'speed'  : 4000,
                'paging' : true
            }, options),

            slide = function(){
                (i == imageCount) ? i = 0 : i = i;

                $("#sPaging li").eq(i).addClass("on").siblings().removeClass("on");

                el.children().animate({left: -i * settings.width}, 300);

                timing = setTimeout(slide,settings.speed);

                i++;
            },
            paging = function(){
                if (settings.paging){
                    el.after('<div id="sPaging"><ul></ul></div>');

                    for (i; i < imageCount; i++){
                        $("#sPaging ul").append('<li></li>');
                    };

                    $("#sPaging").css('width', settings.width)
                                 .children().css('width', imageCount * 23);

                    $("#sPaging li").click(function(){
                        clearTimeout(timing);
                        i = $(this).index();
                        slide();
                    });
                };
            };

        el.css({'height': settings.height, 'width': settings.width})
          .children().css('width', settings.width * imageCount);

        paging();
        slide();
    };
})