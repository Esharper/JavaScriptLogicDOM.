"use strict"

const container = document.getElementById('container')


const newDiv= document.createElement('div');
const newParagraph=document.createElement('p');

newParagraph.textContent='This is a new paragraph.';



newDiv.appendChild(newParagraph);

container.appendChild(newDiv);

//newParagraph.style.color='blue';
newParagraph.style.fontSize='30px';

const h3= document.getElementById('h3');

h3.classList.add('turnYellow');

newParagraph.classList.add('turnYellow');

// -== is Equal?

// - === is strictly Equal?

//-!= not Equal?
//-> greater?
//-< lessthan?
//->=
//-<=
const exampleValue= 11;

if (exampleValue > 15) {
    console.log('the value is greater than 15');
    const p = document.createElement('p');
    p.innerText='the vaule is greater than 15';
    container.appendChild(p);
}
    else if (exampleValue < 5) {
        
    console.log('the value is greater than 15');
    const p = document.createElement('p');
    p.innerText='the vaule is greater than 15';
    container.appendChild(p);
    }
    else{

        console.log('the value is greater than 15');
        const p = document.createElement('p');
        p.innerText='the vaule is greater than 15';
        container.appendChild(p);
    }
    
const newExample=15;
if(newExample > 30) {
    console.log ('First if ran: greater than 30');
} else if (newExample< 10) {
    console.log('Second condition: less than 10');
} else {
    console.log('the value is between 10 and 30');
}

console.log('hello');



const userInputField= document.getElementById('userInput');

const submitButton=document.querySelector('button');

function displayOutput(message){
    const container= document.getElementById('outputContainer');
    const newParagraph= document.createElement('p');
    newParagraph.innerText='Say Hi Friend!';
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



console.log('This always runs');