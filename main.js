// function for print to DOM
const printToDom = (stringToPrint, divId) => {
    document.getElementById(divId).innerHTML += stringToPrint;
  }

// function for convert to Secret
const firstStringBuilder = () => {
    let inputString = document.getElementById('user-input').value;
    let inputStringArray = inputString.split('');
    for (let i = 0; i <inputStringArray.length; i++) {
         outputString = inputStringArray[i].charCodeAt();  
         outputString += ','; 
        printToDom(outputString, 'firstOutput');
    }
}
// EventListener for convert to secret button
const secretButton = document.getElementById('secret-button');
secretButton.addEventListener ('click', (e) => {
    firstStringBuilder();
})

// Function for convert to words
const secondStringBuilder = () => {
    let inputString = document.getElementById('user2-input').value;
    let inputStringArray = inputString.split(',');
    for (let i = 0; i <inputStringArray.length; i++) {
        let outputString =String.fromCharCode(inputStringArray[i]);   
        printToDom(outputString, 'secondOutput');
    }
}
// EventListener for convert to word button
const wordButton = document.getElementById('word-button');
wordButton.addEventListener ('click', () => {
    secondStringBuilder();
})

