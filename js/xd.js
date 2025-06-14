document.addEventListener("DOMContentLoaded", function() {
    let audio = new Audio("your-music-file.mp3"); // Podmień na link do Twojej muzyki!
    audio.volume = 0.5; // Możesz zmienić głośność (0.0 - 1.0)
    audio.play().catch(error => console.log("Auto-play blocked, user interaction required."));
});
