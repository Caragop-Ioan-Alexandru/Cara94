const quizData = [
	{
		question: 'How old is Alexandru Caragop?',
		a: '20',
		b: '23',
		c: '26',
		d: '30',
		correct: 'c'

	}, {

		question: 'What is the most used programming language in 2020?',
		a: 'Java',
		b: 'C',
		c: 'Python',
		d: 'JavaScript',
		correct: 'd'

	}, {

		question: `What is the last school that Alexandru attended?`,
		a: 'Lucian Blaga High School, Constanta',
		b: `Academia Navala Mircea cel Batran, Bachelor's degree`,
		c: `Academia Navala Mircea cel Batran, Master's degree`,
		d: `Universitatea Politehnica Bucuresti, Bachelor's degree`,
		correct: 'c'

	}, {

		question: 'Why is Alexandru changing career paths?',
		a: 'Passion for IT and technology',
		b: 'He needs significaly more money',
		c: 'Sickness and injury',
		d: 'He had a major change of perspective',
		correct: 'a'
	}, {
		question: 'What year was JavaScript launched?',
		a: '1996',
		b: '1991',
		c: '1992',
		d: '1995',
		correct: 'd'
	}
];
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById('question-el');
const quiz = document.getElementById('quiz');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');


let currentQuiz = 0;
let score = 0;

loadQuiz();

// Incarcarea chestionarului

function loadQuiz() {

	deselectAnswers();

	const currentQuizData = quizData[currentQuiz];
	questionEl.innerText = currentQuizData.question;

	a_text.innerText = currentQuizData.a;
	b_text.innerText = currentQuizData.b;
	c_text.innerText = currentQuizData.c;
	d_text.innerText = currentQuizData.d;

}

// Verificarea conditiei de raspuns obligatoriu

function getSelected () {
	
	let answer = undefined;

	answerEls.forEach((answerEl) => {
		if (answerEl.checked) {
			answer = answerEl.id;
		}
	});
	return answer;
}

// Deselectarea raspunsului pentru urmatoarea intrebare

function deselectAnswers() {

	answerEls.forEach((answerEl) => {
		answerEl.checked = false;
	});
}

submitBtn.addEventListener('click', () => {
	// check to see the answer
	const answer = getSelected();

	if (answer) {
		if ( answer === quizData[currentQuiz].correct) {
			score++;
		}

		currentQuiz++;

		if (currentQuiz < quizData.length) {
			loadQuiz();
		} else {
			quiz.innerHTML = 
				`<h2>You finished! Your score is ${score} out of ${quizData.length} questions.</h2>
				<button onclick="location.reload()">Reload</button>`;
		}
	}
	
});