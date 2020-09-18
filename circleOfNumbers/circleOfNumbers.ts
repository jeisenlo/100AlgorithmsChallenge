function circleOfNumbers(n: number, firstNumber: number): number {
    const circleArray = [];
    const radiallyOpposite = n / 2;

    // construct the circle of numbers
    for (let i = 0; i < n; i++) {
        circleArray.push(i);
    }

    /*
        If the firstNumber falls in the first half of circle add radiallyOpposite
        If the firstNumber falls in the second half of the circle substract radiallyOpposite
    */
    if (firstNumber < radiallyOpposite) {
        return circleArray[firstNumber + radiallyOpposite];
    }

    return circleArray[firstNumber - radiallyOpposite];

}

console.log(circleOfNumbers(10, 2));
console.log(circleOfNumbers(10, 7));