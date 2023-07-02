//點小圖片 小圖片active，大圖展示該小圖片
let demo = document.querySelector(".demo");
document.addEventListener("click", function (e) {
    if (e.target.classList.contains("smallpic")) {
        e.target.classList.add('active');
        let pic = e.target.getAttribute('src');
        demo.setAttribute('src', pic);
    }
});

//其他小圖取消active 第一張小圖預設active
$(function () {
    $('.smallpic').click(function () {
        $('.smallpic').removeClass('active');
    });
    console.log(this);
    // smallpicArray.indexOf(this)
    $('.smallpic').first().click();
});

//取得小圖路徑產生陣列
let smallpicArray = document.getElementsByClassName("smallpic");
let path = [];
for (i = 0; i < smallpicArray.length; i++) {
    path[i] = smallpicArray[i].getAttribute('src');
}
// console.log(path);

//前後按鈕換大圖
let prev = document.getElementsByClassName("change_pic")[0];
let next = document.getElementsByClassName("change_pic")[1];

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
    $('.smallpic').removeClass('active');
    smallpicArray[index].classList.add('active');
}
next.onclick = function () {
    index++;
    if (index > path.length - 1) {
        index = 0;
    }
    demo.src = path[index];
    $('.smallpic').removeClass('active');
    smallpicArray[index].classList.add('active');
}

