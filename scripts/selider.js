/*
*
* Selider v2.0
* sercaneraslan.com
*
*/
$(function() {
    $.fn.selider = function( options ) {

        var el = $(this),
            elWidth = el.width(),
            elMenu = el.find("ul"),
            elItemCount = elMenu.find("li").length,
            elFakeItemCount = elItemCount + 1,
            thumb = $("#sThumbnail"),
            thumbMenu = thumb.find("ul"),
            thumbMenuItem = thumbMenu.find("li"),
            thumbPrev = $("#sThumbPrev"),
            thumbNext = $("#sThumbNext"),
            thumbPrevNextTotalWidth = thumbPrev.outerWidth(true) * 2,
            thumbBorderWidth = parseInt( thumb.css("border-left-width") ) * 2,
            thumbContainerMarginLeft = parseInt( $("#sThumbContainer").css("margin-left") ),
            thumbSlidePosition = elWidth - ( thumbPrevNextTotalWidth + thumbBorderWidth + thumbContainerMarginLeft ),
            thumbTotalCount = Math.round( elItemCount / ( thumbSlidePosition / thumbMenuItem.outerWidth(true) ) ),
            thumbCurrentCount = 0,
            i = 0,
            j = 0,
            settings = $.extend({
                "speed"     : 4000,
                "pause"     : true,
                "nextPrev"  : true,
                "paging"    : false,
                "thumbnail" : false
            }, options),
            paging,
            pagingMenu,
            pagingMenuItem,
            timing,
            hoverTiming,
            nothing;

            slide = function() {

                clearTimeout(timing);

                if ( i == elFakeItemCount ) {
                    i = 0;
                    elMenu.css("left", 0);
                    slide();
                } else {
                    timing = setTimeout( slide, settings.speed );
                }

                if ( settings.paging ) {
                    pagingMenuItem.eq( i == elItemCount ? 0 : i ).addClass("on").siblings().removeClass("on");
                }

                elMenu.animate({ left: -i * elWidth }, 500);

                i++;
            },

            thumbnail = function() {

                settings.paging = false;

                thumbPrev.click(function() {
                    if ( thumbCurrentCount > 0 ) {
                        --thumbCurrentCount;
                        thumbMenu.animate({left: -thumbSlidePosition * thumbCurrentCount}, 400);
                    }
                });

                thumbNext.click(function() {
                    if ( thumbTotalCount > thumbCurrentCount ) {
                        ++thumbCurrentCount;
                        thumbMenu.animate({left: -thumbSlidePosition * thumbCurrentCount}, 400);
                    };
                });

                thumbMenuItem.click(function() {
                    i = $(this).index();
                    slide();
                });
            },

            paging = function() {

                el.after('<div id="sPaging"><ul></ul></div>');

                paging = $("#sPaging"),
                pagingMenu = paging.find("ul");

                for ( j; j < elItemCount; j++ ) {
                    pagingMenu.append("<li/>");
                }

                pagingMenuItem = pagingMenu.find("li");

                paging.css("width", elWidth);
                pagingMenu.css("width", elItemCount * pagingMenuItem.outerWidth(true));

                pagingMenuItem.click(function() {
                    i = $(this).index();
                    slide();
                });
            },

            nextPrev = function() {

                el.append('<div id="sPrev"></div><div id="sNext"></div>');

                $("#sPrev").click(function() {
                    i = ( i != 1 ) ? i - 2 : 0;
                    slide();
                });

                $("#sNext").click(function() {
                    slide();
                });
            },

            pause = function() {

                el.hover(function() {
                        hoverTiming = setInterval(function() {
                            clearTimeout( timing );
                        }, settings.speed / 2 );
                    },function() {
                        clearInterval( hoverTiming );
                        timing = setTimeout( slide, settings.speed );
                });
            };

        elMenu.css( "width", elWidth * elFakeItemCount )
              .append( elMenu.find("li:first").clone() );    // For Completion of The Slide

        settings.thumbnail  ? thumbnail()   : nothing;
        settings.paging     ? paging()      : nothing;
        settings.nextPrev   ? nextPrev()    : nothing;
        settings.pause      ? pause()       : nothing;

        slide();

        return el;
    };
});