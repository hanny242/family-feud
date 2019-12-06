
// const questions = [
//     {
//       question: "Name a bad job for someone who's accident-prone.",
//       answers: [
//                 {answer: "Driver", percentage: 33}, 
//                 {answer: "Construction Worker", percentage: 20}, 
//                 {answer: "Police Officer", percentage: 11},
//                 {answer: "Food Service", percentage: 10}, 
//                 {answer: "Glass Maker", percentage: 9},
//                 {answer: "Window Washer", percentage: 7}, 
//                 {answer: "Surgeon", percentage: 6}
//               ]
//     },
//     {
//       question: "Name something that you hang up.",
//       answers: [
//                 {answer: "The Phone", percentage: 54},
//                 {answer: "Clothes", percentage: 38},
//                 {answer: "Towel", percentage: 4},
//                 {answer: "Picture Frame", percentage: 3}
//       ]
//     }
//   ]

let game = new FamilyFeudGame()

window.addEventListener("load", () => {
  renderQuestion(game.questions[0])
});

function renderQuestion(question){
    let answersHTML = "";
    for(let i = 0; i < question.answers.length; i++) {
       answersHTML += `<p class="answer-${i}">${question.answers[i].answer}</p>`
    }
    document.getElementsByClassName("question")[0].innerHTML = `
      <div class="question">
        <h1>${question.question}</h1>
        <div class="score"><h3>YOUR SCORE: <h5 id="points">${game.playerPoints}</h5></h3></div>
        <div class="options">${answersHTML}</div>
      </div>
    `;
}

document.querySelector(".submit-answer").addEventListener("click", function(){
  let answer = document.querySelector('.player-answer').value
  game.checkIfRight(answer);
  game.nextQuestion();
  document.querySelector('.player-points').value = game.playerPoints.value
})



//document.querySelector(".submit-answer").onclick = function() {
  // todo B
  // get value
  // check if answer is correct
  // go to next question
  // render next question
//}