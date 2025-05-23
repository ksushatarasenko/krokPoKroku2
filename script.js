


// Универсальная функция для проверки всех типов вопросов
function checkAll(setId) {
    const set = document.getElementById(setId);

    // Вызов функции для проверки вписанных слов, если есть input поля
    checkAnswers(setId);

    // Проверка вариантов с data-correct
    const questions = set.querySelectorAll('.questionOption');

    questions.forEach(question => {
        const correctIndex = question.getAttribute('data-correct');
        const selectedOption = question.querySelector('.selected');
        const selectedIndex = selectedOption ? selectedOption.getAttribute('data-index') : null;

        // Если вариант выбран, проверяем его корректность
        if (selectedIndex !== null) {
            if (selectedIndex === correctIndex) {
                selectedOption.classList.add('correct');
                selectedOption.classList.remove('incorrect');
            } else {
                selectedOption.classList.add('incorrect');
                selectedOption.classList.remove('correct');
            }
        }
    });
}

// Функция для проверки вписанных слов
function checkAnswers(setId) {
    const set = document.getElementById(setId);
    const inputs = set.querySelectorAll('input[data-answer]');
    
    inputs.forEach(input => {
        const correctAnswer = input.getAttribute('data-answer').toLowerCase();
        const userAnswer = input.value.trim().toLowerCase();

        // Проверяем правильность ответа в input
        if (userAnswer === correctAnswer) {
            input.classList.add('correct');
            input.classList.remove('incorrect');
        } else {
            input.classList.add('incorrect');
            input.classList.remove('correct');
        }
    });
}

// Обработчик клика для выбора вариантов ответов
document.addEventListener('DOMContentLoaded', (event) => {
    const questions = document.querySelectorAll('.questionOption');

    questions.forEach(question => {
        const options = question.querySelectorAll('.option');
        options.forEach(option => {
            option.addEventListener('click', () => {
                options.forEach(opt => opt.classList.remove('selected'));
                option.classList.add('selected');
            });
        });
    });

    // Обработчик клика для кнопок проверки
    const checkButtons = document.querySelectorAll('.checkAnswersBtn');

    checkButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const setId = button.getAttribute('data-set-id');
            checkAll(setId);  // Универсальный вызов для проверки конкретного набора вопросов
        });
    });
});


// кнопка для подсказки --------------------------------------------
function toggleHints(hintsId) {
    var hints = document.getElementById(hintsId);
    if (hints.style.display === "none") {
        hints.style.display = "block";
    } else {
        hints.style.display = "none";
    }
}


// Увеличение картинки при клике
document.addEventListener('DOMContentLoaded', function () {
    var zoomableImages = document.querySelectorAll('.zoomable');

    zoomableImages.forEach(function (img) {
        img.addEventListener('click', function () {
            this.classList.toggle('zoomed');
        });
    });
    // Зачёркивание слов
    initWordStrikethrough();
});

// prowerka Optima

function toggleHint2(element) {
    element.classList.toggle('active');
}

// Скрипт для воспроизведения звука при нажатии на картинку

document.querySelectorAll('.play-sound').forEach(function(image) {
    image.addEventListener('click', function() {
        // Получаем ID аудио из data-атрибута
        var audioId = this.getAttribute('data-audio');
        var audio = document.getElementById(audioId);

        // Если аудио уже воспроизводится - ставим паузу
        if (!audio.paused && !audio.ended) {
            audio.pause();
        } else {
            // Если аудио окончено, запускаем его с начала
            if (audio.ended) {
                audio.currentTime = 0; // Начало с начала, если завершилось
            }
            audio.play();  // Воспроизведение звука
        }
    });
});
 
// функция для выпадающего списка
function checkAnswersForm(formId) {
    const form = document.getElementById(formId);
    const selects = form.querySelectorAll('select');

    selects.forEach(select => {
        if (select.value === "correct") {
            select.classList.remove('incorrect');
            select.classList.add('correct');
        } else {
            select.classList.remove('correct');
            select.classList.add('incorrect');
        }
    });
}

// TEXTERIA
const correctText = document.getElementById("task").dataset.correct;

    function normalize(text) {
      return text.trim().toLowerCase().replace(/[.,!?;:]/g, '');
    }

    function checkText() {
      const userInput = document.getElementById("userInput").value;
      const userWords = normalize(userInput).split(/\s+/);
      const correctWords = normalize(correctText).split(/\s+/);

      const resultDiv = document.getElementById("result");
      resultDiv.innerHTML = '';

      for (let i = 0; i < correctWords.length; i++) {
        const userWord = userWords[i] || "";
        const span = document.createElement("span");
        span.textContent = userWord + " ";
        if (userWord === correctWords[i]) {
          span.className = "correct";
        } else {
          span.className = "incorrect";
        }
        resultDiv.appendChild(span);
      }
    }

    // wybor newernogo otweta
    // Обработчик клика по варианту ответа
document.querySelectorAll('.option').forEach(option => {
    option.addEventListener('click', () => {
        const parentQuestion = option.closest('.question');
        const allOptions = parentQuestion.querySelectorAll('.option');

        // Удаляем выделение у всех опций в этом вопросе
        allOptions.forEach(opt => opt.classList.remove('selected', 'correct', 'incorrect'));

        // Добавляем выделение только выбранной
        option.classList.add('selected');
    });
});

// Переименованная функция проверки
function sprawdzOdpowiedzi() {
    const questions = document.querySelectorAll(".question");

    questions.forEach(question => {
        const correctIndex = parseInt(question.getAttribute("data-correct"));
        const options = question.querySelectorAll(".option");

        options.forEach((option, index) => {
            if (option.classList.contains("selected")) {
                if (index === correctIndex) {
                    option.classList.add("correct");
                    option.classList.remove("incorrect");
                } else {
                    option.classList.add("incorrect");
                    option.classList.remove("correct");
                }
            } else {
                // Убираем старую подсветку
                option.classList.remove("correct", "incorrect");
            }
        });
    });
}

// функция - зачеркнуть слово и в инпуте написать правильною форму

function initWordStrikethrough() {
    document.querySelectorAll('.word').forEach(word => {
        word.addEventListener('click', () => {
            word.classList.toggle('strikethrough-blue');
        });
    });
}
// 
