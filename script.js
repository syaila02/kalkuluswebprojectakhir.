
function showPage(pageId) {
  const pages = document.querySelectorAll(".page");
  pages.forEach((page) => {
    page.classList.remove("active"); 
  });
  const targetPage = document.getElementById(pageId);
  if (targetPage) {
    targetPage.classList.add("active"); 
  } else {
    console.error(`Page with ID ${pageId} not found`);
  }
}

function showHomePage() {
  showPage("homePage");
}

function showMateriPage() {
  showPage("materiPage");
}

function showAljabar() {
  showPage("aljabarPage");
}

function showEksponensial() {
  showPage("eksponensialPage");
}

function showTrigonometri() {
  showPage("trigonometriPage");
}

function showFungsiPangkat() {
  showPage("fungsiPangkatPage");
}

function showLogaritma() {
  showPage("logaritmaPage");
}

let timer;
let timeRemaining;
let correctAnswers = 0;

function startTimer() {
  clearInterval(timer); 
  timeRemaining = 60 * 5; 
  document.getElementById("timer").innerText = "Waktu: " + formatTime(timeRemaining);
  timer = setInterval(function () {
    timeRemaining--;
    document.getElementById("timer").innerText =
      "Waktu: " + formatTime(timeRemaining);
    if (timeRemaining <= 0) {
      clearInterval(timer);
      alert("Waktu habis!");
      submitQuiz();
    }
  }, 1000);
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secondsLeft = seconds % 60;
  return `${minutes}:${secondsLeft < 10 ? "0" : ""}${secondsLeft}`;
}

function startAljabarQuiz() {
  showPage("aljabarQuizPage");
  document.getElementById("quizContent").innerHTML = `
        <div class="quiz-question">
            <p><strong>Soal 1:</strong> Apa turunan dari \( f(x) = 5x^3 \)?</p>
            <input type="radio" name="soal1" value="A"> a) \( 15x^2 \) <br>
            <input type="radio" name="soal1" value="B"> b) \( 5x^2 \) <br>
            <input type="radio" name="soal1" value="C"> c) \( 3x^2 \) <br>
            <input type="radio" name="soal1" value="D"> d) \( 5x^2 + 1 \) <br>
        </div>
        <div class="quiz-question">
            <p><strong>Soal 2:</strong> Apa turunan dari \( f(x) = 4x^2 + 2x + 1 \)?</p>
            <input type="radio" name="soal2" value="A"> a) \( 8x + 2 \) <br>
            <input type="radio" name="soal2" value="B"> b) \( 4x + 2 \) <br>
            <input type="radio" name="soal2" value="C"> c) \( 8x + 1 \) <br>
            <input type="radio" name="soal2" value="D"> d) \( 6x + 2 \) <br>
        </div>
    `;
  startTimer(); 
}

function startEksponensialQuiz() {
  showPage("eksponensialQuizPage");
  document.getElementById("quizContent").innerHTML = `
        <div class="quiz-question">
            <p><strong>Soal 1:</strong> Apa turunan dari \( f(x) = e^x \)?</p>
            <input type="radio" name="soal1" value="A"> a) \( e^x \) <br>
            <input type="radio" name="soal1" value="B"> b) \( xe^{x-1} \) <br>
            <input type="radio" name="soal1" value="C"> c) \( \ln(e) \) <br>
        </div>
        <div class="quiz-question">
            <p><strong>Soal 2:</strong> Apa turunan dari \( f(x) = a^x \)?</p>
            <input type="radio" name="soal2" value="A"> a) \( a^x \ln(a) \) <br>
            <input type="radio" name="soal2" value="B"> b) \( x^a \ln(x) \) <br>
            <input type="radio" name="soal2" value="C"> c) \( a^x \ln(x) \) <br>
        </div>
    `;
  startTimer(); 
}

function startTrigonometriQuiz() {
  showPage("trigonometriQuizPage");
  document.getElementById("quizContent").innerHTML = `
        <div class="quiz-question">
            <p><strong>Soal 1:</strong> Berapa turunan dari \( f(x) = \sin(x) \)?</p>
            <input type="radio" name="soal1" value="A"> a) \( \cos(x) \) <br>
            <input type="radio" name="soal1" value="B"> b) \( -\cos(x) \) <br>
            <input type="radio" name="soal1" value="C"> c) \( \sin(x) \) <br>
        </div>
        <div class="quiz-question">
            <p><strong>Soal 2:</strong> Berapa turunan dari \( f(x) = \sec(x) \)?</p>
            <input type="radio" name="soal2" value="A"> a) \( \sec(x) \tan(x) \) <br>
            <input type="radio" name="soal2" value="B"> b) \( \sec(x) \) <br>
            <input type="radio" name="soal2" value="C"> c) \( -\tan(x) \sec(x) \) <br>
        </div>
    `;
  startTimer(); 
}

function startLogaritmaQuiz() {
  showPage("logaritmaQuizPage");
  document.getElementById("quizContent").innerHTML = `
        <div class="quiz-question">
            <p><strong>Soal 1:</strong> Apa turunan dari \( f(x) = \ln(x) \)?</p>
            <input type="radio" name="soal1" value="A"> a) \( \frac{1}{x} \) <br>
            <input type="radio" name="soal1" value="B"> b) \( x \) <br>
        </div>
        <div class="quiz-question">
            <p><strong>Soal 2:</strong> Apa turunan dari \( f(x) = \log_b(x) \)?</p>
            <input type="radio" name="soal2" value="A"> a) \( \frac{1}{x \ln(b)} \) <br>
        </div>
    `;
  startTimer(); 
}

function startFungsiPangkatQuiz() {
  showPage("fungsiPangkatQuisPage");
  document.getElementById("quizContent").innerHTML = `
        <div class="quiz-question">
            <p><strong>Soal 1:</strong> Apa turunan dari \( f(x) = x^n \)?</p>
            <input type="radio" name="soal1" value="A"> a) \( nx^{n-1} \) <br>
            <input type="radio" name="soal1" value="B"> b) \( x^n \) <br>
        </div>
    `;
  startTimer(); 
}

function submitQuiz(quizName, quizScore) {
  // Validasi nilai kuis
  if (quizScore < 0 || quizScore > 100) {
  alert('Nilai kuis tidak valid. Nilai harus antara 0 dan 100.');
  return;
 }
  
  alert(`Quiz ${quizName} selesai dengan nilai ${quizScore}`);
  goBackToMateri();
  }

function goBackToMateri() {
  showPage("materiPage");
}
