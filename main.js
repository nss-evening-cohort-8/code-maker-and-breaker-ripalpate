// function for print to DOM
const printToDom = (stringToPrint, divId) => {
    document.getElementById(divId).innerHTML += stringToPrint;
  }
// function to print first form
const firstFormBuilder = () => {
    let domString =`<div class="first-form">
                        <form class="form-inline">
                            <div class="form-group mx-sm-3 mb-2">
                                <input type="text" class="form-control mr-5" id="user-input" placeholder="Enter your text here">
                            </div>
                            <button type="submit" class="btn btn-primary mb-2 ml-3 pr-5 pl-5" id='secret-button'>Convert to Secret!</button>
                        </form>
                    </div>`
    printToDom(domString, 'firstForm');
}
firstFormBuilder();

// function for convert to Secret
const firstStringBuilder = () => {
    let inputString = document.getElementById('user-input').value;
    let inputStringArray = inputString.split(',');
    let index = i;
    for (let i = 0; i <inputStringArray.length, i++;) {
       let outputString = inputString.charCodeAt(index);    
    }

    printToDom(outputString, 'firstOutput');
}
// EventListener for convert to secret button
const secretButton = document.getElementById('secret-button');
secretButton.addEventListener = ('click', (e) => {
    e.preventDefault();
    firstStringBuilder();
})
// function to Print Second Form
const secondFormBuilder = () => {
    let domString2 = `<div class="first-form">
                        <form class="form-inline">
                            <div class="form-group mx-sm-3 mb-2">
                                <input type="text" class="form-control mr-5" id="user2-input" placeholder="Enter your secret here">
                            </div>
                            <button type="submit" class="btn btn-primary mb-2 ml-3 pr-5 pl-5" id="word-button">Convert to Words!</button>
                        </form>
                    </div>`
    printToDom(domString2, 'secondForm');
}
secondFormBuilder();

// EventListener for convert to word button
const wordButton = document.getElementById('word-button');
wordButton.addEventListener = ('click', (e) => {
    e.preventDefault();

})

