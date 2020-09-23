function newNumeralSystem(number: string): string[] {
    const alphabet: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const result: string[] = [];
    let upCounter: number = 0;

    for (let i = alphabet.indexOf(number); i >= 0; i--) {

        result.push(`${alphabet[upCounter]} + ${alphabet[i]}`);
        if (i === upCounter) {
            break;
        }
        upCounter++;
    }

    return result;
}   

console.log(newNumeralSystem('G'));