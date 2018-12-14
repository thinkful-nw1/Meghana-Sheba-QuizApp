/*
1.create a render function that displays:
  a. current question
  b. answer choices(user can choose only one and cant skip)
  c. submit button
2. create a feedback function that gives feedback about the answer and call render function again.
3. create a results page that shows the result and calls reset function that takes user back to start of the quiz
4. restart function takes user to start page ,sets the question no to 1, and resets score to 0.

*/
'use strict';

const store = {
  'score': 0,
  'currentIndex': 0,
  'isStarted': false,
  'correctAns': '',

  'questions' : [{
    'question': 'What does Ariel collect?',
    'answers': ['Sea shells', 'eels', 'human items', 'seaweed'],
    'correct': 2
  },
  {
    'question': 'How many stepsisters does cinderella have?',
    'answers': ['Two', 'Three', 'Eight', 'one'],
    'correct': 0
  },
  {
    'question': 'What is the name of the mouse Cinderella rescues?',
    'answers': ['Vinny', 'Chad', 'Gus', 'Jackie'],
    'correct': 2
  },
  {
    'question': 'What was Dory\'s first line in the movie Finding Dory?',
    'answers': ['Look Out', 'Hi, I am Dory', 'Just keep swimming', 'Hey there Mr. Grumpy Grills'],
    'correct': 1
  },
  {
    'question': 'Who was Ariel\'s father ?',
    'answers': ['Poseidon', 'Mr. Merman', 'Triton', 'Mr. Ariel'],
    'correct': 2
  },

  {
    'question': 'What is the name of Micky Mouse\'s dog?',
    'answers': ['Mars', 'Neptune', 'Goofy', 'Pluto'],
    'correct': 3
  },
  {
    'question':'What did Alladin steal from the market?',
    'answers': ['Lamp','gold','bread','cake'],
    'correct':2
  }
  ]
};

// function generateStartPage(){
//   $('.app').html(`<header role=banner class='startQuiz'>
//       <h1> Welcome to the Disney movies Quiz!! </h1>
//     </header>
//     <div class='start'>
//       <p> How well do you know your Disney movies?</p>
//       <hr>
//       <button class='start-quiz'>START QUIZ</button>
//       </div>`);
// }




function render() {
  let currentQuestion = store.questions[store.currentIndex];

  $('.app').html(generateQuestionHTML(currentQuestion));
  }

function renderResult() {
  $('.app').html(generateResultHTML());
  console.log(store.score);
}
function generateResultHTML() {
  if (store.score > 3) {
    $('.app').html(`<div class = "goodResult Result" ><h1> You scored  ${store.score} / 6.<br>
	*************************************************************<br>
	             You are a true Disney lover  !!! <br>
	*************************************************************</h1>
	<h2>You may retake the Quiz</h2>
	<p> <button  class='restart' > Restart </button></p>`);
  }
  else {
    $('.app').html(`<div class="badResult Result" ><h1>Your score is ${store.score} /6 . <br>
	*************************************************************<br>
	Better luck next time!!! <br>
	**************************************************************
		</h1>

	<h2>You may retake the Quiz</h2>
	<p> <button  class='restart' type = "submit" > Restart </button></p>
	</div>`);
  }
}


function handleStartButton() {
  $('.app').on('click','.start-quiz',function () {
        render();
  });
}

  function generateQuestionHTML(question) {
    $('.app').html(`<div class="container">
				<header>
				<h2 class ='title'>The Disney Quiz</h2>
				</header>
				<form action="none" class ="questionForm" >
				<fieldset class="questionchoices">
						<p> Question  ${store.currentIndex + 1}  out of 6. </p>
					<legend> <h3>${question.question}</h3></legend>
						<ul>
						${question.answers.map(function (answer, index) {
        return `<li> <input id="ans-${index}" type="radio" name ='answers'  value = '${index}' required >
							<label for="ans-${index}" id = "ans">${answer}</label></input></li>`;
      }).join('')}
						</ul></fieldset>
							<button id ='submitButton'> Submit</button>
          </form>

          <h3 id ="results"> ${store.correctAns} </h3>
          <h3> Your score: ${store.score} / 6 </h3>`);

  }

function handleSubmitQuestion(){
  $('.app').on('submit', '.questionForm',function (e) {
    e.preventDefault();
    console.log("handleSubmitQuestion ran");
    console.log(e);
    store.currentIndex++;
    console.log(store.questions[store.currentIndex]);
    showFeedBackPage();
  });

}
function showFeedBackPage(){
  $('.app').html(`<h2> You are right/wrong</h2>
  <p><button class ="submit-Question"></button></p>`)
  showNextPage();
}

function showNextPage(){
  $('.app').on ('click','.submit-Question' , function(){
    if (store.currentIndex >= store.questions.length){
      renderResult();
    }
    else{
      render();
    }
  console.log(store.currentIndex);

});
}

function main(){
  handleStartButton();
  handleSubmitQuestion();
}

$(
  main
);

// function positiveFeedback(){}
// function negativeFeedback(){}
// function showResults(){}
// function resetQuiz(){}