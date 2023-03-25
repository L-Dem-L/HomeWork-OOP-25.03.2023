export class TextTransformer {
    static transform(text) {
        let result = '';
        for (let i = 0; i < text.length; i++) {
            const char = text.charAt(i);
            if (/[A-Z]/.test(char)) {
                result += char.toLowerCase();
            } else if (/[a-z]/.test(char)) {
                result += char.toUpperCase();
            } else if (/[0-9]/.test(char)) {
                result += '_';
            } else {
                result += char;
            }
        }
        return result;
    }
}