const pollTitle = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();
xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        let answerObj = (JSON.parse(xhr.responseText)).data;
        pollTitle.textContent = answerObj.title

        for (let i = 0; i < answerObj.answers.length; i++) {
            const answer = answerObj.answers[i];
            pollAnswers.insertAdjacentHTML(
                'beforeend',
                `<button class="poll__answer">
                    ${answer}
                </button>`
            )
        }
        const answerBtn = document.querySelectorAll('.poll__answer');
        answerBtn.forEach(btn => {
            btn.addEventListener('click', e => {
                e.preventDefault();
                alert('Спасибо, ваш голос засчитан!')
            })
        });

    }
})



