window.onresize = trueHeightJS;

function trueHeightJS(){
    var h = window.innerHeight;
    var elems = document.getElementsByClassName("true-height")
    for(var i = 0; i < elems.length; i++) {
        elems[i].style.height = h+"px";
    }
}