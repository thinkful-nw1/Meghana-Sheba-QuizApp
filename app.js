/*
1.create a render function that displays:
  a. current question
  b. answer choices(user can choose only one and cant skip)
  c. submit button
2. create a feedback function that gives feedback about the answer and call render function again.
3. create a results page that shows the result and calls reset function that takes user back to start of the quiz
4. restart function takes user to start page ,sets the question no to 1, and resets score to 0.

The starting screen should have a button that users can click to start the quiz.
Users should be prompted through a series of at least 5 multiple choice questions that they can answer.
Users should be asked questions 1 after the other.
Users should only be prompted with 1 question at a time.
Users should not be able to skip questions.
Users should also be able to see which question they're on (for instance, "7 out of 10") and their current score ("5 correct, 2 incorrect").
Upon submitting an answer, users should:
receive textual feedback about their answer. If they were incorrect, they should be told the correct answer.
be moved onto the next question (or interact with an element to move on).
Users should be shown their overall score at the end of the quiz. In other words, how many questions they got right out of the total questions asked.
Users should be able to start a new quiz.

*/
'use strict';
const STORE = {
  userScore:0,
  currentQuestion: 1
};
const Questions =
[{
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
];
function render(){
  $('.js-start-quiz').on('click', event => {
    console.log('`render` ran'); 
  });
}

$(render); 

// //start page
// // handleStartButton
// // generate question page 
// function generateHTML(){}

// //show current question number
// function updateQuestionNumber () {
// }

// //show current score
// function updateScore () {
// }

// //when user submits answer show feedback 
// function handleSubmitAnswer () {
//   $('.questionForm').on('submit', function (event) {
//     event.preventDefault();
//     const answer = $('input:checked').val();
//     const correctAnswer = `$${QUESTIONS[questionNumber].correct}`;
//     if (answer === correctAnswer) {
//       positiveFeedback();
//       updateScore(); 
//     } else {
//       negativeFeedback();
//     }
//   });
// }
// }


// // function positiveFeedback(){
//   let correctAnswer = `${QUESTIONS[questionNumber].correct}`;
//   $('.answerForm').html(`<div class="feedback"><p>Correct!</p><button type=button class="nextButton">Next</button></div>`);
// }


// // function negativeFeedback(){}
//   let correctAnswer = `${QUESTIONS[questionNumber].correct}`;
//   $('.answerForm').html(`<div class="feedback"><p>Wrong!</p><button type=button class="nextButton">Next</button></div>`);
// }

// // generate results page


// // function resetQuiz(){}






