window.onload = function () {
    sliderResize();
}

window.onresize = function () {
    sliderResize();
}

var sliderResize = function() {
    var $slider = jQuery('#slider');
    $slider.css('max-width', '100%');
    var $sliderPrev = jQuery('#slider .prev');
    var $sliderNext = jQuery('#slider .next');
    var $activeImage = jQuery('#slider .slides .active');
    if ($activeImage.length > 0) {
        var imagesWidth = $activeImage[0].naturalWidth;
        var imagesHeight = $activeImage[0].naturalHeight;
        var sliderWidth = $slider.width();
        var sliderHeight = sliderWidth * imagesHeight / imagesWidth;
        var buttonTop = sliderHeight / 2 - 7;
        $slider.height(sliderHeight);
        $sliderPrev.css('top', buttonTop);
        $sliderNext.css('top', buttonTop);
    }
}
