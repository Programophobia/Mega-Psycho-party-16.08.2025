document.addEventListener("DOMContentLoaded", function() {
    let audio = new Audio("muza/a.mp3"); // Poprawiona ścieżka do MP3!
    audio.volume = 0.5; // Możesz zmienić głośność (0.0 - 1.0)
    
    audio.play().catch(error => {
        console.log("Auto-play blocked, user interaction required.");
        document.addEventListener("click", function() {
            audio.play();
        }, { once: true });
    });
});
