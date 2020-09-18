function compareIntegers(a: string, b: string): string {
    const numA = parseInt(a);
    const numB = parseInt(b);

    // double ternary
    return numA > numB ? "greater" : numB > numA ? "less" : "equal";
}

console.log(compareIntegers('12', '13'));
console.log(compareIntegers('875', '799'));
console.log(compareIntegers('1000', '1000'));