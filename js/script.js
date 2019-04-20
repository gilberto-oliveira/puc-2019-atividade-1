"use strict";

window.onload = function() {
    var figZoom = document.getElementById("fig_zoom");
    var imgZoom = figZoom.firstElementChild;  
    var capZoom = figZoom.lastElementChild;   
    var figThumbs = document.getElementsByClassName("fig_thumb");
    for (var fig of figThumbs) {
        var img = fig.firstElementChild;
        img.onclick = function(e) {
            removeAllThumbBorders(figThumbs);
            imgZoom.setAttribute("src", e.target.getAttribute("src"));
            capZoom.innerHTML = e.target.getAttribute("alt");
            e.target.setAttribute("class", "fig_borderer");
        }
    }
}

function removeAllThumbBorders(figThumbs) {
    for (var fig of figThumbs) {
        var img = fig.firstElementChild;
        img.removeAttribute("class");
    }
}