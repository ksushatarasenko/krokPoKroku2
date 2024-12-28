// -------------- выбор несколько ответов

function arraysEqual(arr1, arr2) {
    return JSON.stringify(arr1.sort()) === JSON.stringify(arr2.sort());
}

function checkAnswersLabel(formId, resultId) {
    const form = document.getElementById(formId);
    const questions = form.getElementsByClassName('question');
    let score = 0;

    for (let i = 0; i < questions.length; i++) {
        const question = questions[i];
        const correctAnswers = question.getAttribute('data-correct').split(',');
        const selectedAnswers = Array.from(form.querySelectorAll(`input[name="q${i + 1}"]:checked`)).map(el => el.value);
        
        const resultElement = document.getElementById(resultId);

        if (arraysEqual(selectedAnswers, correctAnswers)) {
            score++;
            resultElement.innerHTML = "Правильно! <img src='https://i.pinimg.com/564x/0b/5d/1f/0b5d1f62c0c6ddaa2c9c465264c5343c.jpg' alt='Correct Smiley' width='60' height='60' />";
        } else {
            resultElement.innerHTML = "Неправильно! <img src='https://i.pinimg.com/564x/12/7a/db/127adb0185cb2c9c8abac2f28966bb97.jpg' alt='Incorrect Smiley' width='60' height='60' />";
        }
    }
}