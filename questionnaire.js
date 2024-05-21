
        let cd; 
        const timer = document.getElementById('timer');
        const startbtn = document.getElementById('start');
        const submitbtn= document.getElementById('submit');
        let timeleft = 10*60;
        let tmp = true
        function liveTimer(time){
                const hrs = Math.floor(time /3600);
                const mins = Math.floor((time % 3600)/60);
                const secs = time % 60;
                timer.textContent= `${String(hrs).padStart(2, '0')}: ${String(mins).padStart(2, '0')}: ${String(secs).padStart(2, '0')}`;
        }
        function startTimer() {
            const radioButtons = document.querySelectorAll('input[type="radio"]');
            radioButtons.forEach(button => button.disabled = false);

            submitbtn.style.display = 'block';

            cd = setInterval( () => {
                if (timeleft > 0) {
                    timeleft--;
                    liveTimer(timeleft);
                } else {
                    clearInterval(cd);
                    alert("Time's up! Quiz Submitted!");
              submitAnswers();
                }
            }, 1000);
        }
        function stopTimer(){
            clearInterval (cd);
        }
        const Questions = [
    {
         question: "What is the capital of Australia?",
         choices: ["Sydney","Melbourn","Canberra","Perth"],
         answer: "Canberra"
    },
    {
        question: "What is the capital of France?",
        choices: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: "Paris"
    },
    {
        question: "What is the largest planet in our solar system?",
        choices: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Jupiter"
    },
    {
        question: "What is the chemical symbol for gold?",
        choices: ["Au", "Ag", "Pb", "Pt"],
        answer: "Au"
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        choices: ["Harper Lee", "Mark Twain", "J.K. Rowling", "Ernest Hemingway"],
        answer: "Harper Lee"
    },
    {
        question: "What is the hardest natural substance on Earth?",
        choices: ["Gold", "Iron", "Diamond", "Platinum"],
        answer: "Diamond"
    },
    {
        question: "What is the square root of 64?",
        choices: ["6", "7", "8", "9"],
        answer: "8"
    },
    {
        question: "Who painted the Mona Lisa?",
        choices: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Claude Monet"],
        answer: "Leonardo da Vinci"
    },
    {
        question: "What is the main ingredient in guacamole?",
        choices: ["Tomato", "Avocado", "Lettuce", "Cucumber"],
        answer: "Avocado"
    },
    {
        question: "What is the smallest prime number?",
        choices: ["0", "1", "2", "3"],
        answer: "2"
    },
    {
        question: "Who discovered penicillin?",
        choices: ["Alexander Fleming", "Marie Curie", "Isaac Newton", "Albert Einstein"],
        answer: "Alexander Fleming"
    },
    {
        question: "What is the capital of Japan?",
        choices: ["Beijing", "Seoul", "Bangkok", "Tokyo"],
        answer: "Tokyo"
    },
    {
        question: "What is the fastest land animal?",
        choices: ["Cheetah", "Lion", "Horse", "Elephant"],
        answer: "Cheetah"
    },
    {
        question: "How many continents are there?",
        choices: ["5", "6", "7", "8"],
        answer: "7"
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        choices: ["Charles Dickens", "Jane Austen", "William Shakespeare", "Mark Twain"],
        answer: "William Shakespeare"
    },
    {
        question: "What is the capital of Canada?",
        choices: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
        answer: "Ottawa"
    },
    {
        question: "What is the chemical symbol for water?",
        choices: ["H2O", "CO2", "O2", "N2"],
        answer: "H2O"
    },
    {
        question: "Who was the first president of the United States?",
        choices: ["Thomas Jefferson", "John Adams", "George Washington", "Abraham Lincoln"],
        answer: "George Washington"
    },
    {
        question: "Which planet is known as the Red Planet?",
        choices: ["Earth", "Venus", "Mars", "Jupiter"],
        answer: "Mars"
    },
    {
        question: "What is the largest ocean on Earth?",
        choices: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        answer: "Pacific Ocean"
    },
    {
        question: "What is the main gas found in the air we breathe?",
        choices: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        answer: "Nitrogen"
    },
    {
        question: "Who invented the telephone?",
        choices: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Guglielmo Marconi"],
        answer: "Alexander Graham Bell"
    },
    {
        question: "What is the boiling point of water?",
        choices: ["90°C", "95°C", "100°C", "110°C"],
        answer: "100°C"
    },
    {
        question: "What is the longest river in the world?",
        choices: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
        answer: "Nile River"
    },
    {
        question: "Who developed the theory of relativity?",
        choices: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"],
        answer: "Albert Einstein"
    },
    {
        question: "What is the currency of Japan?",
        choices: ["Dollar", "Yen", "Euro", "Won"],
        answer: "Yen"
    },
    {
        question: "Which planet is closest to the sun?",
        choices: ["Earth", "Venus", "Mercury", "Mars"],
        answer: "Mercury"
    },
    {
        question: "What is the tallest mountain in the world?",
        choices: ["K2", "Kangchenjunga", "Lhotse", "Mount Everest"],
        answer: "Mount Everest"
    },
    {
        question: "What is the most abundant gas in the Earth's atmosphere?",
        choices: ["Nitrogen", "Oxygen", "Carbon Dioxide", "Helium"],
        answer: "Nitrogen"
    },
    {
        question: "What type of rock is marble?",
        choices: ["Metamorphic", "Sedimentary", "Granite", "Igneous"],
        answer: "Metamorphic"
    }
    
        ];
        function displayQuestions() {
            const questionContainer = document.getElementById('questionContainer');
            Questions.forEach((question, index) => {
                const questionDiv = document.createElement('div');
                questionDiv.classList.add('questions');

                const questionText = document.createElement('span');
                questionText.innerHTML = `${index + 1}. ${question.question} <span class="req">*</span>`;
                questionDiv.appendChild(questionText);

                const optionsDiv = document.createElement('div');
                optionsDiv.classList.add('options');
                question.choices.forEach(choice => {
                    const label = document.createElement('label');
                    label.classList.add('option-item');
                    const radioInput = document.createElement('input');
                    radioInput.setAttribute('type', 'radio');
                    radioInput.setAttribute('name', `question${index}`);
                    radioInput.setAttribute('value', choice);
                    radioInput.disabled = true;
                    label.appendChild(radioInput);
                    label.innerHTML += choice;

                    optionsDiv.appendChild(label);
                });
                questionDiv.appendChild(optionsDiv);
                const correctnessSpan = document.createElement('span');
                correctnessSpan.classList.add('correctness');
                questionDiv.appendChild(correctnessSpan);

                questionContainer.appendChild(questionDiv);
                
                
            });startbtn.addEventListener('click', startTimer);
            submitbtn.style.display = 'none';
        }

        function submitAnswers() {
    let correctCounter = 0;
    const questionDivs = document.querySelectorAll('.questions');
    for (let i = 0; i < questionDivs.length; i++) {
                const selectedOption = questionDivs[i].querySelector(`input[name="question${i}"]:checked`);
                if (!selectedOption) {
                    alert('Please answer all questions before submitting.');
                    return;
                }
            }
            stopTimer();
    questionDivs.forEach((questionDiv, index) => {
        const selectedOption = questionDiv.querySelector(`input[name="question${index}"]:checked`);
        const correctnessSpan = questionDiv.querySelector('.correctness');
        if (selectedOption && selectedOption.value === Questions[index].answer) {

            questionDiv.style.borderColor = 'green';
            questionDiv.style.borderWidth = "1.5px";
            correctCounter++;
        } else {

            questionDiv.style.borderColor = 'red';
            questionDiv.style.borderWidth = "1.5px";
            correctnessSpan.style.color = 'red';
            correctnessSpan.textContent = `Correct answer: ${Questions[index].answer}`;
        }
        if (selectedOption) {
                selectedOption.checked = true;
            }
        
    });
    const scoreSpan = document.getElementById('score');
    scoreSpan.textContent = `Score: ${correctCounter}/${Questions.length}`;

    submitbtn.style.display = 'none';
}
displayQuestions();

submitbtn.addEventListener('click', submitAnswers); 
