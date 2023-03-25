export class StringJoiner {
    constructor() {
        this.strings = [];
    }

    add(string) {
        this.strings.push(string);
    }

    toString() {
        return this.strings.join('');
    }
}

export function joinStrings(...args) {
    const stringJoiner = new StringJoiner();
    args.forEach(arg => stringJoiner.add(arg));
    return stringJoiner.toString();
}