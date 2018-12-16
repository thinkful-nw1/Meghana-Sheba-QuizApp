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

const store = {
  'score': 0,
  'currentIndex': 0,
  'isStarted': false, //questions[store.currentIndex].correct
  'correctAns': '',

  'questions' : [{
    'question': 'What does Ariel collect?',
    'answers': ['Sea shells', 'Eels', 'Human items', 'Seaweed'],
    'correct': 2
  },
  {
    'question': 'How many stepsisters does cinderella have?',
    'answers': ['Two', 'Three', 'Eight', 'One'],
    'correct': 0
  },
  {
    'question': 'What is the name of the mouse Cinderella rescues?',
    'answers': ['Vinny', 'Chad', 'Gus', 'Jackie'],
    'correct': 2
  },
  {
    'question': 'What was Dory\'s first line in the movie Finding Dory?',
    'answers': ['Look Out', 'Hi, I am Dory', 'Just keep swimming', 'Hey there, Mr. Grumpy Grills'],
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
    'question':'What did Aladdin steal from the market?',
    'answers': ['Lamp','Gold','Bread','Cake'],
    'correct':2
  }
  ], 
  get currentQuestion(){
    return this.questions[this.currentIndex]; 
  }
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

  $('.app').html(generateQuestionHTML(store.currentQuestion));
  }

function renderResult() {
  $('.app').html(generateResultHTML());
  console.log(store.score);
}

//this will reset to the first question and score and current index set to 0
function restartQuiz(){
  $('.app').on ('click' , '.restart',function(){
    console.log('clicked');
    store.currentIndex = 0;
    store.score = 0;

    render();
  });
}

function handleStartButton() {
  $('.app').on('click','.start-quiz',function () {
        render();
  });
}

function generateQuestionHTML(question) {
    $('.app').html(`<div class="container">
        <header><h2>The Disney Quiz</h2></header>
        
        <form action="none" class ="questionForm" >
        
        <h2> Question ${store.currentIndex + 1}
          of 7: ${question.question}</h2>

				<fieldset class="questionchoices">


						
						${question.answers.map(function (answer, index) {
        return `<ul> <input id="ans-${index}" type="radio" name ='answers'  value = '${index}' required >
							<label for="ans-${index}" id = "ans">${answer}</label></input> </ul>`;
      }).join('')}
						</fieldset>
							<button id ='submitButton'> Submit</button>
          </form>

          <h3 id ="results"> ${store.correctAns} </h3>
          <h3> Your score: ${store.score} / 7 </h3>`);

  }
  function generateResultHTML() {
    if (store.score > 5) {
      $('.app').html(`<div class = "goodResult Result" > <h1> You scored  ${store.score} / 7. </h1>
               <h2> You are a true Disney lover!!! <h2>
               <img src = https://media.giphy.com/media/bdmmfJT2wanks/giphy.gif alt = Fireworks at Disney height =50% width =50%>
	<h2>You may retake the Quiz</h2>
	<p> <button  class='restart' > Restart </button></p>`);
    } else {
      $('.app').html(`<div class="badResult Result" ><h1>Your score is ${store.score} /7 . </h1>
  <h2> Better luck next time!!! </h2> 
  <img src = https://media.giphy.com/media/Lb3vIJjaSIQWA/giphy.gif alt "Big Hero gives a hug" heigh=50% width=50%>
	<h2>You may retake the Quiz</h2>
	<p> <button  class='restart' > Restart </button></p>
	</div>`);
    }
  }

function handleSubmitQuestion(){
  $('.app').on('submit', '.questionForm',function (e) {
    e.preventDefault();
    console.log("handleSubmitQuestion ran");
    console.log(e);

    let correctAns = store.currentQuestion.correct;
    console.log(correctAns);
    let userAns = $("input[name='answers']:checked").val();
    console.log(userAns);
    if (userAns == correctAns){
      store.score++;
    showCorrectFeedBackPage();
    }
    else {
      showWrongFeedBackPage();
    }
    store.currentIndex++;
  });

}

function showWrongFeedBackPage() {
  $('.app').html(`<h2> Sorry, you are wrong. The correct answer is

  "${store.currentQuestion.answers[store.currentQuestion.correct]}" </h2>
  <img src="https://media.giphy.com/media/9YKHJycHTSZ2M/giphy.gif" alt = "A disappointed cat" height=50% width=50%>
  <p><button class ="submit-Question">Next Question</button></p>`)
  showNextPage();
}
function showCorrectFeedBackPage(){
  $('.app').html(`<h2> You are Correct! </h2>
  <img src = "https://media.giphy.com/media/1X6GxAMkbkLcJKLQy5/giphy.gif" alt = "An excited Micky Mouse" height=50% width=50%>
  <p><button class ="submit-Question">Next Question</button></p>`)
  showNextPage();
}

function showNextPage(){
  $('.app').on ('click','.submit-Question',function(){
    if (store.currentIndex >=store.questions.length){
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
  restartQuiz();

}

$(
  main
);

