'use strict';

var uline = document.getElementById("u-line");
var title = document.getElementById("title");
var bg = document.getElementById("bg");
var titlefilter = document.getElementById("title-filter");
var subtitle = document.getElementById("subtitle");
var cover_collapsed = false;
var covercontainer = document.getElementById("cover-container");
var enter = document.getElementById("enter");

function underline_in() {
    uline.style = "width: 100%;";
    console.log("#" + cover_collapsed);
    if (cover_collapsed === false) {
        title.style = "font-size: 75px; color: rgb(230, 90, 96);"
        subtitle.style.opacity = "0%";
        subtitle.style.transform = "translate(0, -50%)";
        bg.style.filter = "blur(10px);";
    } else {
        title.style = "font-size: 29px; color: rgb(230, 90, 96);"
    }
}

function underline_out() {
    bg.style.filter = "blur(0px);";
    uline.style = "width: 0%;";
    console.log("#" + cover_collapsed);
    if (cover_collapsed === false) {
        title.style = "font-size: 80px; color: rgb(255, 255, 255);"
        subtitle.style.opacity = "100%";
        subtitle.style.transform = "translate(0, 50%)";
        bg.style.filter = "blur(0px);";
    } else {
        title.style = "font-size: 30px; color: rgb(255, 255, 255);"
    }


}

function cover_clicked() {
    cover_collapsed = !cover_collapsed;
    console.log(cover_collapsed);
    if (!cover_collapsed) {
        subtitle.style.opacity = "100%";
        covercontainer.style = "height: 100%;";
        title.style = "font-size: 80px;";
        titlefilter.style = "background-color: rgba(255, 0, 0, 0.1);";
        enter.style.transform = `translate(0, 0) rotate(180deg) scale(1)`;
        bg.style.opacity = "100%";
        subtitle.style.display = "initial";
    } else {
        subtitle.style.opacity = "0%";
        covercontainer.style = "height: 8%;";
        title.style = "font-size: 30px;";
        titlefilter.style = "background-color: rgba(100, 100, 100, 0.2);";
        enter.style.transform = `translate(${window.innerWidth / 2.4}px, 0) rotate(0deg) scale(0.75)`;
        bg.style.opacity = "0%";
        covercontainer.style.back
        subtitle.style.display = "none";
    }

}

function enter_in() {
    enter.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
    bg.style.filter = "blur(10px)";
}

function enter_out() {
    enter.style.backgroundColor = "rgba(0, 0, 0, 0)";
    bg.style.filter = "blur(0)";
}