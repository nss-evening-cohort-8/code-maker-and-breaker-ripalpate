// function for print to DOM
const printToDom = (stringToPrint, divId) => {
    document.getElementById(divId).innerHTML += stringToPrint;
  }

const firstStringBuilder = () => {
    let domString =`<div class="first-form">
                        <form class="form-inline">
                            <div class="form-group mx-sm-3 mb-2">
                                <input type="text" class="form-control mr-5" id="student-input" placeholder="Enter your text here">
                            </div>
                            <button type="submit" class="btn btn-primary mb-2 ml-3 pr-5 pl-5">Convert to Secret!</button>
                        </form>
                    </div>`
    printToDom(domString, 'firstForm');
}
firstStringBuilder();

const secondStringBuilder = () => {
    let domString2 = `<div class="first-form">
                        <form class="form-inline">
                            <div class="form-group mx-sm-3 mb-2">
                                <input type="text" class="form-control mr-5" id="student-input" placeholder="Enter your secret here">
                            </div>
                            <button type="submit" class="btn btn-primary mb-2 ml-3 pr-5 pl-5">Convert to Words!</button>
                        </form>
                    </div>`
    printToDom(domString2, 'secondForm');
}
secondStringBuilder();

