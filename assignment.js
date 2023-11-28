"use strict"

console.log('hello');



const userInputField= document.getElementById('userInput');

const submitButton=document.querySelector('button');

function displayOutput(message){
    const container= document.getElementById('outputContainer');
    const newParagraph= document.createElement('p');
    newParagraph.innerText='This is a new Trend!';
    container.appendChild(newParagraph);
}


submitButton.addEventListener('click', function  (){console.log('user has clicked')});
const userInput = userInputField.value;
if (userInput.trim()=== '10') {
    displayOutput('you entered number 10!');

}

if (parseInt(userInput) ===10){
    displayOutput('you entered the number 10');
}else if (userInput.toLowerCase()==='hello'){
    displayOutput('hello to you, too');
}else {
    displayOutput('You entered: ', userInput, ',')
}
