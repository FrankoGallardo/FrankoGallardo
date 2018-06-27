function click() {
    var ok = document.getElementById("ok");
    ok.onclick = changeImage;
}

function changeImage() {
    var pokeballImg = document.getElementById("icon1")
    pokeballImg.src = "";
}