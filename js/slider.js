;
(function ($, window, document, undefined) {

    "use strict";

    var pluginName = "slider";
    var that;
    var timer;
    var defaults = {
        delay: 1000,
        interval: 10000,
        slide: 1,
        slides: 0
    };

    function Plugin(element, options) {
        this.element = element;
        this.settings = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    Plugin.prototype = {
        init: function () {
            that = this;
            var $slider = $(this.element);
            var $position = $slider.find('.position');
            $slider.children('.slides').find('img').each(function (index, element) {
                that.settings.slides++;
                var slide = that.settings.slides;
                $position.append('<div class="points point' + slide + '"></div>');
                var $point = $position.find('.point' + slide);
                $point.click(function () {
                    that.show(slide);
                });
                if (slide == that.settings.slide) {
                    $(element).addClass('active').css('opacity', '1');
                    $point.addClass('active');
                } else {
                    $(element).css('opacity', '0');
                }
            });
            $slider.hover(function () {
                clearInterval(timer);
            }, function () {
                that.auto();
            });
            $slider.find('.prev').click(function () {
                that.prev();
            });
            $slider.find('.next').click(function () {
                that.next();
            });
            that.auto();
        },
        auto: function () {
            timer = setInterval(function () {
                that.next();
            }, that.settings.interval);
        },
        next: function () {
            if (that.settings.slide < that.settings.slides) {
                that.show(that.settings.slide + 1);
            } else {
                that.show(1);
            }
        },
        prev: function () {
            if (that.settings.slide > 1) {
                that.show(that.settings.slide - 1);
            } else {
                that.show(that.settings.slides);
            }
        },
        show: function (slide) {
            $('.image' + that.settings.slide).stop().removeClass('active').animate({opacity: 0}, that.settings.delay);
            $(that.element).find('.point' + that.settings.slide).removeClass('active');
            that.settings.slide = slide;
            $('.image' + that.settings.slide).stop().addClass('active').animate({opacity: 1}, that.settings.delay);
            $(that.element).find('.point' + that.settings.slide).addClass('active');
            return this;
        }
    };

    $.fn[ pluginName ] = function (options) {
        this.each(function () {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName, new Plugin(this, options));
            }
        });
        return this;
    };

})(jQuery, window, document);
