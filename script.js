// --- Data: European Countries ---
const europeanCountries = [
    { name: "Albania", code: "al", description: "Located in Southeast Europe on the Balkan Peninsula, known for its archaeological sites and castles." },
    { name: "Andorra", code: "ad", description: "A tiny principality nestled between France and Spain in the Pyrenees mountains, famous for ski resorts and duty-free shopping." },
    { name: "Austria", code: "at", description: "A landlocked country in Central Europe, celebrated for its imperial history, classical music, and Alpine landscapes." },
    { name: "Belarus", code: "by", description: "A landlocked country in Eastern Europe, known for its Stalinist architecture and primeval forests." },
    { name: "Belgium", code: "be", description: "Located in Western Europe, famous for its medieval towns, Renaissance architecture, chocolates, and waffles. Headquarters of the EU and NATO." },
    { name: "Bosnia and Herzegovina", code: "ba", description: "Situated on the Balkan Peninsula, known for its medieval villages, rivers like the Neretva, and Dinaric Alps." },
    { name: "Bulgaria", code: "bg", description: "A Balkan nation with diverse terrain encompassing Black Sea coastline, mountains, and rivers, including the Danube." },
    { name: "Croatia", code: "hr", description: "An Eastern European country with a long coastline on the Adriatic Sea, encompassing more than a thousand islands." },
    { name: "Cyprus", code: "cy", description: "An island country in the Eastern Mediterranean, known for its rich history, beaches, and divided capital, Nicosia." },
    { name: "Czech Republic", code: "cz", description: "A landlocked country in Central Europe, famous for its ornate castles, native beers, and historic Prague." },
    { name: "Denmark", code: "dk", description: "A Scandinavian country comprising the Jutland Peninsula and numerous islands. Linked to Sweden via the Öresund bridge." },
    { name: "Estonia", code: "ee", description: "A country in Northern Europe bordering the Baltic Sea and Gulf of Finland. Includes more than 1,500 islands." },
    { name: "Finland", code: "fi", description: "A Northern European nation bordering Sweden, Norway, and Russia, known for its thousands of lakes and forests." },
    { name: "France", code: "fr", description: "A Western European nation famous for its art, fashion, cuisine, and iconic landmarks like the Eiffel Tower." },
    { name: "Germany", code: "de", description: "Located in Central Europe, known for its rich history, beer culture, automotive industry, and influential philosophers." },
    { name: "Greece", code: "gr", description: "Located in Southeast Europe, considered the cradle of Western civilization, known for ancient ruins and sunny islands." },
    { name: "Hungary", code: "hu", description: "A landlocked country in Central Europe, known for its capital Budapest, thermal spas, and paprika spice." },
    { name: "Iceland", code: "is", description: "A Nordic island nation defined by its dramatic landscape with volcanoes, geysers, hot springs, and lava fields." },
    { name: "Ireland", code: "ie", description: "An island in the North Atlantic, known for its lush green landscapes, rich history, and vibrant pub culture." },
    { name: "Italy", code: "it", description: "A Southern European country with a long Mediterranean coastline, known for its influential art, architecture, fashion, and cuisine." },
    { name: "Kosovo", code: "xk", description: "A disputed territory and partially recognised state in Southeast Europe, known for medieval monasteries." }, // Note: 'xk' is a user-assigned code
    { name: "Latvia", code: "lv", description: "A country on the Baltic Sea between Lithuania and Estonia, known for its dense forests and Art Nouveau architecture in Riga." },
    { name: "Liechtenstein", code: "li", description: "A tiny, doubly landlocked German-speaking microstate in Alpine Central Europe, known for its medieval castles." },
    { name: "Lithuania", code: "lt", description: "A country in the Baltic region of Europe, known for its medieval Old Town in Vilnius and coastal dunes." },
    { name: "Luxembourg", code: "lu", description: "A small landlocked country in Western Europe, bordered by Belgium, France, and Germany. Known for its finance sector." },
    { name: "Malta", code: "mt", description: "A Southern European island country consisting of an archipelago in the Mediterranean Sea, known for historic sites." },
    { name: "Moldova", code: "md", description: "An Eastern European country and former Soviet republic, known for its vineyards and wine cellars." },
    { name: "Monaco", code: "mc", description: "A sovereign city-state and microstate on the French Riviera, known for its upscale casinos, yacht-lined harbor, and Grand Prix motor race." },
    { name: "Montenegro", code: "me", description: "A Balkan country with rugged mountains, medieval villages, and a narrow strip of beaches along its Adriatic coastline." },
    { name: "Netherlands", code: "nl", description: "A country in Northwestern Europe known for a flat landscape of canals, tulip fields, windmills, and cycling routes." },
    { name: "North Macedonia", code: "mk", description: "A country in the Balkan Peninsula in Southeast Europe, known for Lake Ohrid and ancient towns." },
    { name: "Norway", code: "no", description: "A Scandinavian country encompassing mountains, glaciers, and deep coastal fjords. Known for fishing, hiking, and skiing." },
    { name: "Poland", code: "pl", description: "An Eastern European country on the Baltic Sea known for its medieval architecture and Jewish heritage." },
    { name: "Portugal", code: "pt", description: "A Southern European country on the Iberian Peninsula, bordering Spain. Known for its Atlantic beaches, port wine, and Fado music." },
    { name: "Romania", code: "ro", description: "A southeastern European country known for the forested region of Transylvania, ringed by the Carpathian Mountains." },
    { name: "Russia", code: "ru", description: "Spanning Eastern Europe and Northern Asia, it's the largest country in the world, known for Moscow's Bolshoi and St. Petersburg's Mariinsky." }, // Geographically complex, but part is in Europe
    { name: "San Marino", code: "sm", description: "A mountainous microstate surrounded by north-central Italy. Among the world's oldest republics." },
    { name: "Serbia", code: "rs", description: "A landlocked country situated at the crossroads of Central and Southeast Europe in the southern Pannonian Plain and the central Balkans." },
    { name: "Slovakia", code: "sk", description: "A landlocked country in Central Europe, known for its dramatic natural landscape and many castles." },
    { name: "Slovenia", code: "si", description: "A country in Central Europe known for its mountains, ski resorts, and lakes. Lake Bled is a famous landmark." },
    { name: "Spain", code: "es", description: "Located on the Iberian Peninsula, known for its diverse culture, flamenco music, bullfighting, beaches, and Moorish architecture." },
    { name: "Sweden", code: "se", description: "A Scandinavian nation with thousands of coastal islands and inland lakes, along with vast boreal forests and glaciated mountains." },
    { name: "Switzerland", code: "ch", description: "A mountainous Central European country, home to numerous lakes, villages, and the high peaks of the Alps. Known for skiing and hiking." },
    { name: "Ukraine", code: "ua", description: "A large country in Eastern Europe known for its Orthodox churches, Black Sea coastline, and forested mountains." },
    { name: "United Kingdom", code: "gb", description: "An island nation in northwestern Europe, made up of England, Scotland, Wales, and Northern Ireland. Known for London, Shakespeare, and The Beatles." },
    { name: "Vatican City", code: "va", description: "A city-state surrounded by Rome, Italy, the headquarters of the Roman Catholic Church. Home to St. Peter's Basilica and the Vatican Museums." }
];

// --- DOM Elements ---
const quizContainer = document.getElementById('quiz-container');
const scoreElement = document.getElementById('score');
const questionNumberElement = document.getElementById('question-number');
const questionContainer = document.getElementById('question-container');
const flagImage = document.getElementById('flag-image');
const answerButtonsContainer = document.getElementById('answer-buttons');
const descriptionContainer = document.getElementById('description-container');
const descriptionText = document.getElementById('description-text');
const feedbackMessage = document.getElementById('feedback-message');
const nextButton = document.getElementById('next-button');
const finalScoreContainer = document.getElementById('final-score-container');
const finalScoreElement = document.getElementById('final-score');
const restartButton = document.getElementById('restart-button');

// --- Quiz State ---
let currentQuestionIndex = 0;
let score = 0;
let quizQuestions = []; // Array to hold the 15 selected questions for the current quiz

// --- Utility Functions ---
// Fisher-Yates (Knuth) Shuffle algorithm
function shuffleArray(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
    return array;
}

// Select 15 random countries for the quiz
function selectQuizQuestions() {
    const shuffledCountries = shuffleArray([...europeanCountries]);
    quizQuestions = shuffledCountries.slice(0, 15);
}

// --- Quiz Logic ---
function loadQuestion() {
    // Reset styles and visibility from previous question
    resetQuestionUI();

    if (currentQuestionIndex >= quizQuestions.length) {
        showFinalScore();
        return;
    }

    // Update question number
    questionNumberElement.textContent = currentQuestionIndex + 1;

    const currentQuestion = quizQuestions[currentQuestionIndex];

    // Set flag image - use SVG for better quality
    flagImage.src = `https://flagcdn.com/h120/${currentQuestion.code.toLowerCase()}.svg`;
    flagImage.alt = `Flag of ${currentQuestion.name}`;
    // Fallback in case SVG fails - though onerror handles basic errors
     flagImage.onerror = function() {
         console.error(`Failed to load flag for ${currentQuestion.name} (${currentQuestion.code}). Trying PNG.`);
         this.onerror=null; // Prevent infinite loop if PNG also fails
         this.src=`https://flagcdn.com/w160/${currentQuestion.code.toLowerCase()}.png`;
         this.onerror = function() {
             console.error(`Failed to load PNG flag for ${currentQuestion.name}. Using placeholder.`);
             this.onerror=null;
             this.src='https://placehold.co/160x120/fecaca/991b1b?text=Flag+Error';
         }
     };


    // Prepare answer options
    const correctAnswer = currentQuestion.name;
    const options = [correctAnswer];

    // Get 3 incorrect options
    const incorrectOptions = europeanCountries
        .filter(country => country.name !== correctAnswer) // Exclude correct answer
        .map(country => country.name); // Get only names
    shuffleArray(incorrectOptions); // Shuffle to pick random distractors

    // Add 3 unique incorrect options
    for (let i = 0; options.length < 4 && i < incorrectOptions.length; i++) {
        if (!options.includes(incorrectOptions[i])) {
            options.push(incorrectOptions[i]);
        }
    }
     // Ensure we always have 4 options, even if data is limited (unlikely here)
     while (options.length < 4) {
         options.push(`Placeholder Option ${options.length}`); // Fallback
     }


    shuffleArray(options); // Shuffle the final 4 options

    // Create answer buttons
    answerButtonsContainer.innerHTML = ''; // Clear previous buttons
    options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option;
        button.classList.add(
            'answer-btn', 'w-full', 'text-left', 'p-3', 'border', 'border-gray-300',
            'rounded-lg', 'hover:bg-blue-100', 'focus:outline-none',
            'focus:ring-2', 'focus:ring-blue-300', 'focus:ring-opacity-50',
            'transition', 'duration-150', 'ease-in-out', 'text-gray-700'
        );
        button.onclick = () => selectAnswer(button, option === correctAnswer, currentQuestion.description);
        answerButtonsContainer.appendChild(button);
    });

    // Make question container visible (useful for transitions)
    questionContainer.classList.remove('hidden');
    questionContainer.classList.add('fade-in');
}

function resetQuestionUI() {
    descriptionContainer.classList.add('hidden');
    feedbackMessage.classList.add('hidden');
    feedbackMessage.textContent = '';
    nextButton.classList.add('hidden');
    // Remove result styles from buttons
    answerButtonsContainer.querySelectorAll('button').forEach(btn => {
        btn.disabled = false;
        btn.classList.remove('correct-answer', 'incorrect-answer', 'bg-green-500', 'bg-red-500', 'text-white', 'disabled-button', 'border-green-600', 'border-red-600');
         btn.classList.add('border-gray-300', 'hover:bg-blue-100', 'text-gray-700');
    });
}

function selectAnswer(button, isCorrect, description) {
    // Disable all buttons after selection
    answerButtonsContainer.querySelectorAll('button').forEach(btn => {
        btn.disabled = true;
        btn.classList.add('disabled-button');
        // Remove hover effect class when disabled
        btn.classList.remove('hover:bg-blue-100');
    });

    // Provide feedback
    feedbackMessage.classList.remove('hidden');
    feedbackMessage.classList.add('fade-in');
    if (isCorrect) {
        score++;
        scoreElement.textContent = score;
        button.classList.add('correct-answer', 'bg-green-500', 'text-white', 'border-green-600');
        button.classList.remove('border-gray-300');
        feedbackMessage.textContent = "Correct!";
        feedbackMessage.classList.add('text-green-600');
        feedbackMessage.classList.remove('text-red-600');
    } else {
        button.classList.add('incorrect-answer', 'bg-red-500', 'text-white', 'border-red-600');
         button.classList.remove('border-gray-300');
        feedbackMessage.textContent = `Incorrect. The answer was ${quizQuestions[currentQuestionIndex].name}.`;
        feedbackMessage.classList.add('text-red-600');
        feedbackMessage.classList.remove('text-green-600');

        // Highlight the correct answer button
         answerButtonsContainer.querySelectorAll('button').forEach(btn => {
             if (btn.innerText === quizQuestions[currentQuestionIndex].name) {
                 btn.classList.add('bg-green-200', 'border-green-400');
                 btn.classList.remove('border-gray-300');
             }
         });
    }

    // Show description
    descriptionText.textContent = description;
    descriptionContainer.classList.remove('hidden');
    descriptionContainer.classList.add('fade-in');


    // Show next/finish button
    if (currentQuestionIndex < quizQuestions.length - 1) {
        nextButton.textContent = "Next Question";
    } else {
        nextButton.textContent = "Show Results";
    }
    nextButton.classList.remove('hidden');
    nextButton.classList.add('fade-in');
}

function handleNextButtonClick() {
    currentQuestionIndex++;
    loadQuestion();
}

function showFinalScore() {
    questionContainer.classList.add('hidden');
    scoreElement.parentElement.parentElement.classList.add('hidden'); // Hide score during final screen
    descriptionContainer.classList.add('hidden');
    feedbackMessage.classList.add('hidden');
    nextButton.classList.add('hidden');

    finalScoreElement.textContent = score;
    finalScoreContainer.classList.remove('hidden');
    finalScoreContainer.classList.add('fade-in');
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    scoreElement.textContent = score;
    questionNumberElement.textContent = 1;
    
    finalScoreContainer.classList.add('hidden');
    questionContainer.classList.remove('hidden');
    scoreElement.parentElement.parentElement.classList.remove('hidden'); // Show score again

    selectQuizQuestions(); // Reshuffle for a new set of 15 questions
    loadQuestion();
}

// --- Event Listeners ---
nextButton.addEventListener('click', handleNextButtonClick);
restartButton.addEventListener('click', restartQuiz);

// --- Initial Load ---
document.addEventListener('DOMContentLoaded', () => {
    selectQuizQuestions();
    loadQuestion();
});
