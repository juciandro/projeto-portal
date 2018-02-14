window.onload = function() {
    var slidewidth = document.getElementById("slide-show").offsetWidth;
    var objs = document.getElementsByClassName("slide");
    for(var i=0;i<objs.length;i++){
        objs[i].style.width = slidewidth+'px';
    }
}