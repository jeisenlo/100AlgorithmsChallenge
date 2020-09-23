function longestDigitsPrefix(inputString: string): string {
    let digitsOnly: string = '';

    for (let i = 0; i < inputString.length; i++) {
        if (isNaN(parseInt(inputString[i]))) {
           break;
        }
        digitsOnly += inputString[i];
    }

    return digitsOnly;
}

console.log(longestDigitsPrefix('123aa1'));