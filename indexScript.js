let light = document.getElementById("circle");

document.getElementById("cam-button").addEventListener("click", () => {
    light.classList.remove("flash-ani");
    setTimeout(function() {
        light.classList.add("flash-ani");
    }, 500)
})

let eject = document.getElementById("cam-photo");

document.getElementById("cam-button").addEventListener("click", () => {
    eject.classList.remove("eject-photo");
    setTimeout(function () {
        eject.classList.add("eject-photo");
    }, 500);
});