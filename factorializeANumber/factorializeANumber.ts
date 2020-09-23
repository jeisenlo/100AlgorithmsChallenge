function factorializeANumber(num: number): number {
    let factorial: number = num;
    
    for (let i = num - 1; i > 0; i--) {
        factorial *= i;
    }

    return factorial;
}

console.log(factorializeANumber(5));
console.log(factorializeANumber(10));