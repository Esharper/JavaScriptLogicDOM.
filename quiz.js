"use strict"



function createQuestion(questiontext){
    const container= document.getElementById('container');
    const questionDiv = document.createElement('div');
    questionDiv.classList.add('question');

    const questionP= document.createElement('p');
    questionP.textContent= questionText;

    questionDiv.appendChild(questionP);
    container.appendChild(questionDiv);

    const userAnswer=prompt(questiontext + '(yes/no)');
const answerP= document.createElement('p');
if (userAnswer.toLowerCase() ===corectAnswer){
    answerP.textContent = 'You answered Yes,';

}

}