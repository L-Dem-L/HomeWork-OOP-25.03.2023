export function createAcronym(phrase) {
    const words = phrase.split(' ');
    const acronym = words.map(word => word[0].toUpperCase());
    return acronym.join('');
}