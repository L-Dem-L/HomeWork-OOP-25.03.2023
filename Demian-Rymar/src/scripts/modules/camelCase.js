export class StyleConverter {
    static convert(styleName) {
        const words = styleName.split('-');
        let converted = words[0];
        for (let i = 1; i < words.length; i++) {
            const capitalized = words[i].charAt(0).toUpperCase() + words[i].slice(1);
            converted += capitalized;
        }
        return converted;
    }
}
