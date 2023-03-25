export function splitString(str, delimiter) {
    let result = [];
    let substr = '';
    // проходимо по кожному символу в рядку
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        // якщо поточний символ - роздільник, то додаємо поточний підрядок до результатів
        if (char === delimiter) {
            result.push(substr);
            substr = '';  // очищуємо змінну для наступного підрядка
        } else {
            substr += char;  // додаємо поточний символ до поточного підрядка
        }
    }
    result.push(substr);
    return result;
}