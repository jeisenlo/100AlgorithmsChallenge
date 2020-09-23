function growingPlant(upSpeed: number, downSpeed: number, desiredHeight: number): number {
    let numOfDays = 0;
    let currentHeight = 0;

    while (currentHeight < desiredHeight) {
        numOfDays++;
        // During the day light
        currentHeight += upSpeed;
        // Break out of the loop if desiredHeight is reached
        if (currentHeight < desiredHeight) {
            // During the night time
            currentHeight -= downSpeed;
        }
    }

    return numOfDays;
}

console.log(growingPlant(100, 10, 910))