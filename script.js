var slide = document.querySelector('.slideshow');
var imagens = [
    "https://blog.venturas.com.br/wp-content/uploads/2016/08/costa-rica-a-opcao-ideal-para-o-turismo-de-natureza-na-america-latina.jpeg",
    "https://www.vidadeturista.com/wp-content/uploads/2019/07/natureza-orlando-praias-regiao-530x354.jpg",
    "https://p4.wallpaperbetter.com/wallpaper/362/276/920/nature-4k-pc-full-hd-wallpaper-preview.jpg",
    "https://p4.wallpaperbetter.com/wallpaper/639/977/196/download-nature-for-pc-1920x1080-wallpaper-preview.jpg"
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
