//漢堡的出現與消失
let CLOSE = document.getElementById("menuClose");
let OPEN = document.getElementById("menuOpen");
let cover = document.getElementsByClassName("cover")[0];

OPEN.addEventListener("click", function (e) {
    e.preventDefault();
    let menu = document.getElementsByTagName("nav")[0];
    menu.classList.add("-menuDisplay");
    cover.setAttribute("style", "display: block;");
});

CLOSE.addEventListener("click", function (e) {
    e.preventDefault();
    let menu = document.getElementsByTagName("nav")[0];
    menu.classList.remove("-menuDisplay");
    cover.setAttribute("style", "display: none;");
});

cover.addEventListener("click", function () {
    let menu = document.getElementsByTagName("nav")[0];
    menu.classList.remove("-menuDisplay");
    cover.setAttribute("style", "display: none;");
});

//產品展開收合

// $(function () {
//     $("#more1").on("click", function () {
//         $("#show1").slideToggle();
//     });
//     $("#more2").on("click", function () {
//         $("#show2").slideToggle();
//     });
//     $("#more3").on("click", function () {
//         $("#show3").slideToggle();
//     });

// });

$(function () {

    $('.more').click(function () {
        if (!$(this).next().is(':visible')) {
            $(this).addClass('active');
            $(this).next().slideToggle();
        } else {
            $(this).removeClass('active');
            $(this).next().slideToggle();

        }
    });
});

//關閉視窗


document.addEventListener("click", function (e) {
    if (e.target.classList.contains("actbtn")) {
        e.target.setAttribute('src', '../IMG/close2.png');
        // let place = ;
        let window = e.target.closest(".window");
        window.classList.add('-close');
    }
});

//視窗拖曳 資料來源https://ssk7833.github.io/blog/2016/10/06/solution-of-multiple-draggable-elements-overlay-each-other-html/

// var elementSelected;
// var mouseX, mouseY;
// var zIndex = 0;
// document.querySelectorAll(".window").forEach(function (element, index) {
//     element.style.left = 400;
//     element.addEventListener('mousedown', function (event) {
//         elementSelected = element;
//         mouseX = event.clientX - parseInt(getComputedStyle(elementSelected).left);
//         mouseY = event.clientY - parseInt(getComputedStyle(elementSelected).top);
//         // move this element to top layer
//         elementSelected.style['z-index'] = ++zIndex;
//         //document.querySelector(".container").appendChild(elementSelected);
//     })
// });

// document.addEventListener('mousemove', function (event) {
//     if (elementSelected !== undefined) {
//         elementSelected.style.left = event.clientX - mouseX + 'px';
//         elementSelected.style.top = event.clientY - mouseY + 'px';
//     }
// });

// document.addEventListener('mouseup', function (event) {
//     elementSelected = undefined;

// });
var elementSelected;
var mouseX, mouseY;
var zIndex = 6;
document.querySelectorAll(".up").forEach(function (element, index) {
    // element.closest('.window').style.left = 400;
    element.addEventListener('mousedown', function (event) {
        elementSelected = element.closest('.window');
        // elementSelected.setAttribute('style', 'position:relative;');
        mouseX = event.clientX - parseInt(getComputedStyle(elementSelected).left);
        mouseY = event.clientY - parseInt(getComputedStyle(elementSelected).top);
        // move this element to top layer
        elementSelected.style['z-index'] = ++zIndex;
        //document.querySelector(".container").appendChild(elementSelected);
    })
});
document.querySelectorAll(".window").forEach(function (element, index) {
    element.addEventListener('mousedown', function (event) {
        // move this element to top layer
        element.style['z-index'] = ++zIndex;
    })
});

document.addEventListener('mousemove', function (event) {
    if (elementSelected !== undefined) {
        elementSelected.style.left = event.clientX - mouseX + 'px';
        elementSelected.style.top = event.clientY - mouseY + 'px';
    }
});

document.addEventListener('mouseup', function (event) {
    elementSelected = undefined;

});