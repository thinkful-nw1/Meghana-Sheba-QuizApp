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
alert('connected');
console.log($);

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


$(render);


function render() {
  //this function renders the first question
  $('.start-quiz').on('click', function () {
    console.log("clicked");
    let currentQuestion = store.questions[store.currentIndex];
    console.log(currentQuestion);
     generateQuestionHTML(currentQuestion);
  });
 
}


function generateQuestionHTML(question) {
  //this function takes question as an argument and will be used to show the current question from the store object, it loops over the answers and gives an ul of answers 
  $('.app').html(`<div class="container">
				<header>
				<h2 class ='title'>The Disney Quiz</h2>
				</header>
				<form action="post" class ="questionForm" >
						<p> Question  ${store.currentIndex + 1 }  out of 6. </p>
            <h3> ${question.question}</h3>
            <ul>
            ${question.answers.map(function(answer,index){
               return `<li> <input id="ans-${index}" type="radio" name='answers' value='${index}' required >
               <label for="ans-${index}" id="ans">${answer}</label></input></li>`;
		        }).join('')}
            </ul>
          <button class ='checkAns'type = 'submit'> Submit </button>
					</form>
          
					<h3> Your score: ${store.score} / 6 </h3>`
					);
}



// function positiveFeedback(){}
// function negativeFeedback(){}
// function showResults(){}
// function resetQuiz(){}