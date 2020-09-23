function depositProfit(deposit: number, rate: number, threshold: number): number {
    let years: number = 0;
    let total: number = deposit;

    // Keep looping until the total passes threshold
    while (total < threshold) {

        total *= (rate / 100);

        years++;
    }

    return years;
}

console.log(depositProfit(100, 20, 170));
// console.log(depositProfit(30000, 20, 1000000));