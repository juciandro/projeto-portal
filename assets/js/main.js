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
function passarSlide(pos){
    slideItem = pos;
    var slidewidth = document.getElementById("slide-show").offsetWidth;
    document.getElementsByClassName("slideshow-area")[0].style.marginLeft = "-" + (slidewidth * slideItem) + "px";
}
//essa função está funcionando
// function toggleMenu() {
//     var click = document.getElementById("click-menu");
//     if(click.style.display =="none" || click.style.display ==""){
//         click.style.display = "block";
//     }else{
//         click.style.display = "none";
//     }
// }
