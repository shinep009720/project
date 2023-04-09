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
        }else{
            $(this).removeClass('active');
            $(this).next().slideToggle();

        }
    });
});
