class Calculator{
    constructor(prevOperand, currOperand){
        this.previousOperand = prevOperand;
        this.currentOperand = currOperand;
    }
    clear(){

    }
    delete(){

    }
    appendNumber(number){
        
    }
    chooseOperation(){

    }
    compute(){

    }
    getDisplayNumber(){

    }
}


const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-del]');
const clearButton = document.querySelector('[data-all-clear]');
const previousOperandText = document.querySelector('[data-previous-operand]');
const currentOperandText = document.querySelector('[data-current-operand]');

const calculator = new Calculator(previousOperandText, currentOperandText);

numberButtons.forEach((btn) => {
    btn.addEventListener("click", function(){
        calculator.appendNumber(btn.innerText);
    })
})

