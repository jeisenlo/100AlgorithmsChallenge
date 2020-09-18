function centuryFromYear(year: number): number {
    let centuries = [];

    // Build the array of centuries
    for (let i = 0; i <= 2005; i += 100) {
        centuries.push({ "start": i + 1, "end": i + 100 });
    }

    // Find the index array where the year falls within the start and end date range
    // Then, add 1 to the index to calculate the century
    const century = centuries.findIndex(century => year >= century.start && year <= century.end) + 1;
    
    return century;
}

function centuryFromYear2(year: number): number {
    const century = year / 100;
    
    // If there is no remainder then return the century without adding 1
    if (year % 100 === 0) {
        return century;
    }
    // Round the century down to the nearest whole number
	return Math.floor(century) + 1;
}


console.log(centuryFromYear(1905));
console.log(centuryFromYear(1700));

console.log(centuryFromYear2(1905));
console.log(centuryFromYear2(1700));