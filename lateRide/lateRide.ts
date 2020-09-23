function lateRide(n: number): number {
    const hours: number = Math.floor(n / 60);
    const minutes: number = n % 60;
    // concatenate the hours and minutes as a string
    const time = hours.toString().concat(minutes.toString());

    // Convert time into an array of numbers
    const timeArray: number[] = time
			.split("")
			.map((char) => parseInt(char));

    // Sum up the numbers in the time array
    return timeArray.reduce((acc, curr) => acc + curr);
}

console.log(lateRide(240));
console.log(lateRide(808));
