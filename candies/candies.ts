function candies(n: number, m: number): number {
    let numOfCandiesPerChild = Math.floor(m / n);
    
    return numOfCandiesPerChild * n;
}

console.log(candies(3, 10));