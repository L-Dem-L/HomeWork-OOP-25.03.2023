export function print(template, ...args) {
    let result = template;
    for (let i = 0; i < args.length; i++) {
        const regex = new RegExp(`%${i + 1}`, 'g');
        result = result.replace(regex, args[i]);
    }
    console.log(result);
}
