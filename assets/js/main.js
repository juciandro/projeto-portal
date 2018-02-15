var slideItem=0;
window.onload = function () {
    setInterval('proximoSlide()', 4000);
    var slidewidth = document.getElementById("slide-show").offsetWidth;
    var objs = document.getElementsByClassName("slide");
    for (var i = 0; i < objs.length; i++) {
        objs[i].style.width = slidewidth + 'px';
    }
}
function proximoSlide() {
    var slidewidth = document.getElementById("slide-show").offsetWidth;
    if (slideItem >= 3) {
        slideItem = 0;
    } else {
        slideItem++;
    }
    document.getElementsByClassName("slideshow-area")[0].style.marginLeft = "-" + (slidewidth * slideItem) + "px";
}