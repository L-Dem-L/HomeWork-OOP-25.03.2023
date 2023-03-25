export class NumberConverter {
    constructor() {
        this.ones = [
            "", 
            "один", 
            "два", 
            "три", 
            "чотири", 
            "п'ять", 
            "шість", 
            "сім", 
            "вісім", 
            "дев'ять"
        ];

        this.teens = [
            "десять", 
            "одинадцять", 
            "дванадцять", 
            "тринадцять", 
            "чотирнадцять", 
            "п'ятнадцять", 
            "шістнадцять", 
            "сімнадцять", 
            "вісімнадцять", 
            "дев'ятнадцять"
        ];

        this.tens = [
            "", 
            "", 
            "двадцять", 
            "тридцять", 
            "сорок", 
            "п'ятьдесят", 
            "шістдесят", 
            "сімдесят", 
            "вісімдесят", 
            "дев'яносто"
        ];
    }

    convert(num) {
        if (num < 10) {
            return this.ones[num];
        } else if (num >= 10 && num < 20) {
            return this.teens[num - 10];
        } else {
            const ten = Math.floor(num / 10);
            const one = num % 10;
            return `${this.tens[ten]} ${this.ones[one]}`.trim();
        }
    }
}