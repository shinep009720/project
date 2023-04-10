let demo = document.querySelector(".demo");
document.addEventListener("click", function (e) {
    if (e.target.classList.contains("smallpic")) {
        e.target.classList.add('active');
        let pic = e.target.getAttribute('src');
        demo.setAttribute('src', pic);
    }
});

$(function () {
    $('.smallpic').click(function () {
        $('.smallpic').removeClass('active');
    });
    $('.smallpic').first().click();
});

let smallpicArray = document.getElementsByClassName("smallpic");
let path = [];
for (i = 0; i < smallpicArray.length; i++) {
    path[i] = smallpicArray[i].getAttribute('src');
}
// console.log(path);
let prev = document.getElementsByClassName("fa-backward-step")[0];
let next = document.getElementsByClassName("fa-forward-step")[0];

for (j = 0; j < smallpicArray.length; j++) {
    var index =  0;
    if(smallpicArray[j].classList.contains('active')){
        index = j;
    }    
}

// console.log(index);
prev.onclick = function () {
    index--;
    if (index < 0) {
        index = path.length - 1;
    }
    demo.src = path[index];
}
next.onclick = function () {
    index++;
    if (index > path.length - 1) {
        index = 0;
    }
    demo.src = path[index];
}


