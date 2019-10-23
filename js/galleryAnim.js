const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");

let imgArray = [img1, img2, img3];
let counter = 0;

window.setInterval(function() {
    imgArray[counter].classList.remove("opaque");

    if(counter == 2) counter = -1;

    counter++;
    imgArray[counter].classList.add("opaque");

}, 9000);