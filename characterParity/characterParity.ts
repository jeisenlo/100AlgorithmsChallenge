function characterParity(symbol: string): string {
    const parsedSymbol = parseInt(symbol);

    // double ternary
    return isNaN(parsedSymbol) ? "not a digit" : 
        parsedSymbol % 2 === 0 ? "even" : "odd";
}

console.log(characterParity('5'))
console.log(characterParity('8'))
console.log(characterParity('q'))
