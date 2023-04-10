let product = document.getElementById("products");

window.addEventListener("scroll", function () {

    if (product.getBoundingClientRect().top <= -100) {
        product.lastElementChild.setAttribute('style', 'opacity: 1;')
    }

});

let toRight = document.getElementById("toRight");
let toLeft = document.getElementById("toLeft");

toRight.onclick = function(){
    document.getElementsByClassName('insp')[0].scrollLeft += 600;
}

toLeft.onclick = function(){
    document.getElementsByClassName('insp')[0].scrollLeft -= 600;
}

