// main.js
let volSlider = document.getElementById("volume-slider");
let volNum = document.getElementById("volume-number");
let radio = document.getElementById("audio-selection");
let button = document.getElementById("honk-btn");
volNum.addEventListener("input", (event) => {
    volSlider.value = event.target.value;
    document.getElementById("horn-sound").volume = (event.target.value / 100);
    updateVolImg(event.target.value);
});
volSlider.addEventListener("input", (event) => {
    volNum.value = event.target.value;
    document.getElementById("horn-sound").volume = (event.target.value / 100);
    updateVolImg(event.target.value);
});

radio.addEventListener("change", (event) => {
    let sound = document.getElementById("horn-sound");
    let picture = document.getElementById("sound-image");
    if (event.target.id == "radio-car-horn") {
        sound.setAttribute("src", "./assets/media/audio/car-horn.mp3");
        picture.setAttribute("src", "./assets/media/images/car.svg");
    }
    if (event.target.id == "radio-party-horn") {
        sound.setAttribute("src", "./assets/media/audio/party-horn.mp3");
        picture.setAttribute("src", "./assets/media/images/party-horn.svg");
    }
    if (event.target.id == "radio-air-horn") {
        sound.setAttribute("src", "./assets/media/audio/air-horn.mp3");
        picture.setAttribute("src", "./assets/media/images/air-horn.svg");
    }
});

button.addEventListener("click", (event) => {
    event.preventDefault();
    console.log(document.getElementById("horn-sound").volume);
    document.getElementById("horn-sound").play();
});

function updateVolImg(volume) {
    if (volume >= 67) {
        document.getElementById("volume-image").setAttribute("src", "./assets/media/icons/volume-level-3.svg");
        document.getElementById("honk-btn").removeAttribute("disabled");
    }
    if (volume <= 66 && volume >= 34) {
        document.getElementById("volume-image").setAttribute("src", "./assets/media/icons/volume-level-2.svg");
        document.getElementById("honk-btn").removeAttribute("disabled");
    }
    if (volume >= 1 && volume <= 33) {
        document.getElementById("volume-image").setAttribute("src", "./assets/media/icons/volume-level-1.svg");
        document.getElementById("honk-btn").removeAttribute("disabled");
    }
    if (volume == 0) {
        document.getElementById("volume-image").setAttribute("src", "./assets/media/icons/volume-level-0.svg");
        document.getElementById("honk-btn").setAttribute("disabled", "true");
    }
};
// TODO
