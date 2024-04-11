errorMsg = '';
result = 0;
isValidate= false;
expression = '';

function appendNumber(number) {
    document.getElementById('errorMsg').innerHTML = "";
    if(expression == 'Infinity' || expression == 'Error' || expression == '0'){
        expression = '';
    }
    if(expression.startsWith('+') || expression.startsWith('*') || expression.startsWith('/') || expression.startsWith('0')){
        expression = ''
    }
    console.log(number);
    this.expression += number;
    document.getElementById('display').value = this.expression;
}

function appendOperator(operator) {
    document.getElementById('errorMsg').innerHTML = "";
    if(expression.endsWith('+') || expression.endsWith('*') || expression.endsWith('/') || expression.endsWith('.') || expression.endsWith('-')){
        expression = expression.slice(0,expression.length-1) + operator;
    }else{
        expression += operator;
    }
    document.getElementById('display').value = expression;
}
function calculate() {
    try {
        if (validateInput()) {
            const result = eval(this.expression);
            document.getElementById('display').value = result;
            this.expression = result.toString();
        }
    } catch (error) {
        document.getElementById('display').value = 'Error';
        this.expression = '';
    }
}

function validateInput() {
    if (expression.endsWith('+') || expression.endsWith('*') || expression.endsWith('/') || expression.endsWith('.') || expression.endsWith('-')) {
        document.getElementById('errorMsg').innerHTML = "Expression can not ends with operator!";
        return false;
    }else{
        return true;
    }
}

function del() {
    this.expression = this.expression.slice(0, -1);
    document.getElementById('display').value = this.expression;
}
function reset() {
    this.expression = '';
    document.getElementById('display').value = this.expression;
}