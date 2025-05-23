function checkRadio(taskId) {
    // Объект с правильными ответами для каждого задания по его id
    const correctAnswers = {
        task201B3: {
            question1: '1',
            question2: '3',
            question3: '1',
            question4: '3',
            question5: '1',
            question6: '1'
        },
        task202B3: {
            question1: '2',
            question2: '1',
            question3: '3'
        },
        task204B1_1: {
            question1: '2',
            question2: '1',
            question3: '3'
        },
        task205_63: {
            question1: '1',
            question2: '1',
            question3: '2',
            question4: '2',
            question5: '1',
            question6: '2',
            question7: '1',
            question8: '1',
        },
        task205_64: {
            question1: '1',
            question2: '2',
            question3: '1',
            question4: '2',
            question5: '1',
            question6: '1',
        },
        task205B1: {
            question1: '2',
            question2: '3',
            question3: '3',
            question4: '1',
            question5: '3',
            question6: '1',
        }
        
    };

    let allCorrect = true;

    // Проверяем, есть ли корректные ответы для данного задания
    if (correctAnswers[taskId]) {
        const answers = correctAnswers[taskId];

        // Перебираем все вопросы для данного задания
        for (const [question, correctValue] of Object.entries(answers)) {
            const selectedAnswer = document.querySelector(`#${taskId} input[name="${question}"]:checked`);

            // Проверяем, существует ли элемент input
            const inputElement = document.querySelector(`#${taskId} input[name="${question}"]`);
            if (!inputElement) {
                console.error(`Не найден элемент input для question ${question} в task ${taskId}`);
                continue;
            }

            const taskElement = inputElement.closest('.task');
            if (!taskElement) {
                console.error(`Не найден элемент .task для question ${question} в task ${taskId}`);
                continue;
            }

            if (selectedAnswer) {
                if (selectedAnswer.value === correctValue) {
                    taskElement.classList.add('correct');
                    taskElement.classList.remove('incorrect');
                } else {
                    taskElement.classList.add('incorrect');
                    taskElement.classList.remove('correct');
                    allCorrect = false;
                }
            } else {
                // Если пользователь не выбрал вариант ответа
                taskElement.classList.add('incorrect');
                taskElement.classList.remove('correct');
                allCorrect = false;
            }
        }
    } else {
        console.error(`Нет правильных ответов для задания с id: ${taskId}`);
        return;
    }
}