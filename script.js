var slide = document.querySelector('.slideshow');
var imagens = [
   "01.jpg",
    "02.jpg",
    "03.jpg",
    "04.jpg"
];
var intervalo = 1500;
var index = 0;
var intervalId;

function volTar() {
    index = (index === 0) ? imagens.length - 1 : index - 1;
    slide.src = imagens[index];
}
function avancar() {
    index = (index === imagens.length - 1) ? 0 : index + 1;
    slide.src = imagens[index];
}
function moverSlideShow() {
    
    avancar();
}
function pausar() {
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
    } else {
        intervalId = setInterval(moverSlideShow, intervalo);
    }
}
intervalId = setInterval(moverSlideShow, (intervalo)+2);
