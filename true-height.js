/* -----------------------------------------------
/* Author : Khafizi Noh  - mkfizi.github.io 
/* MIT license: http://opensource.org/licenses/MIT
/* GitHub : https://github.com/mkfizi/true-height.js
/* ----------------------------------------------- */

window.onresize = trueHeightJS;

function trueHeightJS(){
    var h = window.innerHeight;
    var elems = document.getElementsByClassName("true-height")
    for(var i = 0; i < elems.length; i++) {
        elems[i].style.height = h+"px";
    }
}