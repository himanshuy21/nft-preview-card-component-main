var image = document.getElementsByClassName('img_card-container')[0];
var Btn = document.getElementsByClassName('btn')[0];
var overLay = document.getElementsByClassName('overlay')[0];

image.addEventListener('mouseover' , () => {
    overLay.style.display = 'block';
    Btn.style.display = 'block';
})
image.addEventListener('mouseout' , () => {
    overLay.style.display = 'none';
    Btn.style.display = 'none';
})