/* -----------------------------------------------
/* Author : Khafizi Noh  - mkfizi.github.io 
/* MIT license: http://opensource.org/licenses/MIT
/* Version : 1.0.1
/* Website : https://mkfizi.github.io/true-height.js
/* GitHub : https://github.com/mkfizi/true-height.js
/* ----------------------------------------------- */

window.onresize = window.addEventListener("resize", function() {
    checkWidth();
});

var innerBrowser = {
    height:  window.innerHeight,
    width: window.innerWidth
}

function trueHeightJS(){    
    innerBrowser.height = window.innerHeight;
    innerBrowser.width  = window.innerWidth;
    var setHeight       = innerBrowser.height;
    var element         = document.getElementsByClassName("true-height")
    for(var i = 0; i < element.length; i++) {
        var sum = 0;
        var childHeight = checkChild(element[i], sum);
        if(childHeight > setHeight){
            element[i].style.height = childHeight+"px";
        }else{
            element[i].style.height = setHeight+"px";
        }
    }
}

function checkChild(element, sum){
    var elementChild = element.children;
    if(elementChild.length > 0){
        for(var i = 0; i < elementChild.length; i++){
            sum = checkChild(elementChild[i], sum);
        }
    }else{
        sum = sum + element.offsetHeight;
    }
    return sum;
}

function checkWidth(){
    if(window.innerWidth != innerBrowser.width){
        trueHeightJS();
    }
}