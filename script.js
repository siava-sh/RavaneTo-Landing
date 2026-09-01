
const music = document.getElementById("music");
const playButton = document.getElementById("playButton");

playButton.addEventListener("click", () => {
    if (music.paused) {
        music.play();
        playButton.textContent = "Ⅱ";
        playButton.setAttribute("aria-label", "Pause music");
    } else {
        music.pause();
        playButton.textContent = "▶";
        playButton.setAttribute("aria-label", "Play music");
    }
});

music.addEventListener("ended", () => {
    playButton.textContent = "▶";
    playButton.setAttribute("aria-label", "Play music");
});
