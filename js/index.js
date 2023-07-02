//view more出現
let product = document.getElementById("products");

window.addEventListener("scroll", function () {

    if (product.getBoundingClientRect().top <= -100) {
        product.lastElementChild.setAttribute('style', 'opacity: 1;')
    }

});

//ig卷軸跟按鈕
let toRight = document.getElementById("toRight");
let toLeft = document.getElementById("toLeft");

toRight.onclick = function () {
    document.getElementsByClassName('insp')[0].scrollLeft += 600;
}

toLeft.onclick = function () {
    document.getElementsByClassName('insp')[0].scrollLeft -= 600;
}

