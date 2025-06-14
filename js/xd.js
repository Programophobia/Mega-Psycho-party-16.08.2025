document.addEventListener("DOMContentLoaded", function() {
    let audio = document.getElementById("partyMusic");
    audio.volume = 2; 
    audio.play().catch(() => {
        console.log("Auto-play blocked, user interaction required.");
        document.addEventListener("click", function() {
            audio.play();
        }, { once: true });
    });
});

