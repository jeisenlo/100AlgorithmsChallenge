function integerToStringOfFixedWidth(number: number, width: number): string {
    // Positive OR negative number
    let digitsToAdd = width - number.toString().length;
    let finalNumber = number.toString();

    while (digitsToAdd > 0) {
        finalNumber = "0" + finalNumber;
        digitsToAdd--;
    }

    while (digitsToAdd < 0) {
        finalNumber = finalNumber.slice(1);
        digitsToAdd++;
    }

    return finalNumber;
}

console.log(integerToStringOfFixedWidth(1234, 2));
console.log(integerToStringOfFixedWidth(1234, 4));
console.log(integerToStringOfFixedWidth(1234, 5));
