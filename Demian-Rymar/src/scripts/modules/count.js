export class StringStatistics {
    constructor(inputString) {
        this.inputString = inputString;
        this.letterCount = 0;
        this.digitCount = 0;
        this.otherCount = 0;
    }

    calculateStatistics() {
        for (let i = 0; i < this.inputString.length; i++) {
            const char = this.inputString.charAt(i);
            if (/[a-zA-Z]/.test(char)) {
                this.letterCount++;
            } else if (/\d/.test(char)) {
                this.digitCount++;
            } else {
                this.otherCount++;
            }
        }
    }

    displayStatistics() {
        console.log(`Letter count: ${this.letterCount}`);
        console.log(`Digit count: ${this.digitCount}`);
        console.log(`Other count: ${this.otherCount}`);
    }
}