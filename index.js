class Calculator{
    constructor(prevOperand, currOperand){
        this.previousOperand = prevOperand;
        this.currentOperand = currOperand;
        this.clear()
    }
    clear(){
        this.cOperand = '';
        this.pOperand = '';
        this.operation = undefined;
    }
    delete(){
        this.cOperand = this.cOperand.toString().slice(0, -1);
    }
    appendNumber(number){
        if(number === '.' && this.cOperand.includes('.')) return
        this.cOperand = this.cOperand.toString() + number.toString()
    }
    chooseOperation(operation){
        this.operation = operation;
        this.pOperand = this.cOperand;
        this.cOperand = ''
    }
    compute(){
        let result
        switch(this.operation){
            case "+":
                result = parseInt(this.cOperand) + parseInt(this.pOperand)
                break
            case "-":
                result = parseInt(this.pOperand) - parseInt(this.cOperand)
                break
            case "/":
                result = parseInt(this.pOperand) / parseInt(this.cOperand)
                break
            case "*":
                result = parseInt(this.cOperand) * parseInt(this.pOperand)
                break
            default:
                return
        }
        this.cOperand = result;
        this.pOperand = '';
        this.operation = undefined
    }
    
    updateDisplay(){
        this.currentOperand.innerText = this.cOperand
        if(this.operation != null){
            this.previousOperand.innerText = this.pOperand + this.operation
        }
        else{
            this.previousOperand.innerText = '';
        }
        
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
        calculator.updateDisplay()
    })
})

operationButtons.forEach((btn) => {
    btn.addEventListener("click", function(){
        calculator.chooseOperation(btn.innerText);
        calculator.updateDisplay()
    })
})

equalsButton.addEventListener("click", function(){
        calculator.compute();
        calculator.updateDisplay()
    })

deleteButton.addEventListener("click", function(){
        calculator.delete();
        calculator.updateDisplay()
    })

clearButton.addEventListener("click", function(){
        calculator.clear();
        calculator.updateDisplay()
    })


