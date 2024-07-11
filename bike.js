const imageSources = ['4.jpg','2.jpg','5.webp','6.jpg','7.jpg','8.jpg','9.webp','10.jpg','11.webp','12.jpg','13.jpg'];
function changeBackgroundImage() {
const randomIndex = Math.floor(Math.random() * imageSources.length);
document.body.style.backgroundImage = `url(${imageSources[randomIndex]})`;
}
setInterval(changeBackgroundImage, 2000);
