document.addEventListener("DOMContentLoaded", function() {
    const quizData = [
        { question: "The beer runs out at the party. What do you do?", options: ["Run to the store.", "Brew your own beer.", "Call it a detox party.", "End the party."], answer: 0, explanation: "Best to grab more beer to keep the party alive!" },
        { question: "Your friend spills beer on the DJ's equipment. What's your next move?", options: ["Blame the dog.", "Pay for the damage.", "Start an acoustic jam session.", "Turn the party into karaoke night."], answer: 1, explanation: "Paying for damages keeps the DJ happy!" },
       { 
    question: "Someone shows up to the party dressed as a giant taco. What do you do?", 
    options: ["Declare them the official party mascot.", "Ask them where the guacamole is.", "Challenge them to a salsa dance battle.", "Ignore them and pretend it's normal."], 
    answer: 0, 
    explanation: "Declaring them the official party mascot adds humor and keeps the party vibe fun and welcoming!" 
},

       
       { question: "The neighbors complain about the noise. How do you handle it?", options: ["Invite them in.", "Turn down the music.", "Ignore them and turn it up.", "Move the party elsewhere."], answer: 1, explanation: "Lowering the volume keeps things peaceful!" }
    ];
  

    let currentQuestionIndex = 0;
    const quizContainer = document.getElementById("quiz");

    function loadQuestion() {
        quizContainer.innerHTML = ""; // Wyczyść poprzednie pytanie
        
        let item = quizData[currentQuestionIndex];

        let questionElement = document.createElement("div");
        questionElement.classList.add("quiz-question");
        questionElement.innerHTML = `<p><strong>${currentQuestionIndex + 1}. ${item.question}</strong></p>`;

        let timerElement = document.createElement("p");
        timerElement.classList.add("quiz-timer");
        timerElement.innerText = "Time left: 10 sec.";
        questionElement.appendChild(timerElement);

        let timeLeft = 10;
        let countdown = setInterval(function() {
            timeLeft--;
            timerElement.innerText = `Time left: ${timeLeft} sec.`;
            if (timeLeft <= 0) {
                clearInterval(countdown);
                timerElement.innerText = "⏳ Time's up!";
                nextQuestion();
            }
        }, 1000);

        item.options.forEach((option, i) => {
            let optionElement = document.createElement("button");
            optionElement.classList.add("quiz-option");
            optionElement.innerText = option;
            optionElement.addEventListener("click", function() {
                clearInterval(countdown);
                if (i === item.answer) {
                    alert("✔️ Correct answer!\n" + item.explanation);
                } else {
                    alert("❌ Try again!");
                }
                nextQuestion();
            });
            questionElement.appendChild(optionElement);
        });

        quizContainer.appendChild(questionElement);
    }

    function nextQuestion() {
        currentQuestionIndex++;
        if (currentQuestionIndex < quizData.length) {
            loadQuestion();
        } else {
            quizContainer.innerHTML = "<h2>🌀✨ GRAVITY HAS NO MEANING. YOU TRANSCENDED PARTY DIMENSIONS! ✨🌀</h2><br><p>💀 Reality collapses. Colors explode. Drum & Bass echoes through eternity. 💀</p><br><p>🚀 You have reached the ultimate level of PARTY CHAOS. Welcome to infinity. 🚀</p>";
        }
    }

    loadQuestion();
});

document.addEventListener("DOMContentLoaded", function() {
    let playlist = [
        "muza/a.mp3",
        "muza/c.mp3",
        "muza/b.mp3"
    ]; // Dodaj więcej linków, jeśli chcesz!

    let currentTrack = 0;
    let audio = new Audio(playlist[currentTrack]);

    audio.volume = 0.5; 
    audio.play().catch(() => {
        document.addEventListener("click", function() {
            audio.play();
        }, { once: true });
    });

    audio.addEventListener("ended", function() {
        currentTrack = (currentTrack + 1) % playlist.length; // Przechodzi do kolejnego utworu
        audio.src = playlist[currentTrack];
        audio.play();
    });
});

document.body.classList.add("party-mode"); // aktywuje tło
document.getElementById("party-screen").style.display = "block"; // pokazuje rave'owy ekran


const favicons = [
  "js/disco1.png",
  "js/disco2.png",
  "js/disco3.png"
];

let i = 0;




setInterval(() => {
  const link = document.querySelector("link[rel~='icon']");
  if (link) {
    link.type = "image/svg+xml";
    link.href = favicons[i % favicons.length] + "?v=" + new Date().getTime();
    i++;
  }
}, 1200);

