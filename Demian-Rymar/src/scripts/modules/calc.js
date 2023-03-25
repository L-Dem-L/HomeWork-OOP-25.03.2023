export class Calculator {
    constructor() {
        this.operators = ["+", "-", "*", "/"];
    }

    calculate(expression) {
        const operator = this.getOperator(expression);
        if (!operator) {
            throw new Error("Invalid expression");
        }

        const [operand1, operand2] = expression.split(operator).map(Number);
        switch (operator) {
            case "+":
                return operand1 + operand2;
            case "-":
                return operand1 - operand2;
            case "*":
                return operand1 * operand2;
            case "/":
                return operand1 / operand2;
        }
    }

    getOperator(expression) {
        return this.operators.find((operator) => expression.includes(operator));
    }
}
