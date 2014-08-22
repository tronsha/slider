window.onload = function () {
    sliderResize();
}

window.onresize = function () {
    sliderResize();
}

var sliderResize = function() {
    var $slider = jQuery('#slider');
    $slider.css('max-width', '100%');
    var $activeImage = jQuery('.slider .slides .active');
    if ($activeImage.length > 0) {
        var imageWidth = $activeImage[0].naturalWidth;
        var imageHeight = $activeImage[0].naturalHeight;
        var sliderWidth = $slider.width();
        var sliderHeight = sliderWidth * imageHeight / imageWidth;
        $slider.height(sliderHeight);
    }
}
