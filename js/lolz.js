document.addEventListener("DOMContentLoaded", function() {
    const quizData = [
        {
            question: "The beer runs out at the party. What do you do?",
            options: ["Run to the nearest store and buy more beer.", "Start brewing your own beer in the kitchen.", "Convince everyone to switch to water and call it a detox party.", "Declare the party over and send everyone home."],
            answer: 0,
            explanation: "Running to the nearest store to buy more beer is the most practical solution to keep the party alive."
        }
        // Add more crazy questions here!
    ];

    const quizContainer = document.getElementById("quiz");
    quizData.forEach((item, index) => {
        let questionElement = document.createElement("div");
        questionElement.classList.add("quiz-question");
        questionElement.innerHTML = `<p><strong>${index + 1}. ${item.question}</strong></p>`;

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
            });
            questionElement.appendChild(optionElement);
        });

        quizContainer.appendChild(questionElement);
    });
});
