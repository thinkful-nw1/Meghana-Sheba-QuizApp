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
  $('.js-start-quiz').on ('click',function(){
    alert('started');
  });
}
$(render());
function generateHTML(){}
function positiveFeedback(){}
function negativeFeedback(){}
function showResults(){}
function resetQuiz(){}