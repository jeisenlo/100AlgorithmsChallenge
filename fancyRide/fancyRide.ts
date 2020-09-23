function fancyRide(l: number, fares: number[]): string {
    const rideMap: string[] = ['UberX', 'UberXL', 'UberPlus', 'UberBlack', 'UberSUV'];
    const maxMoney: number = 20;
    let bestRide: string = '';

    // Decrement through the fares starting with the most expensive fare
    for (let i = fares.length - 1; i > 0; i--) {
        // If the current fare times l is less than or equal 20
        if (fares[i] * l <= maxMoney) {
            bestRide = rideMap[i];
            break;
        }

    }

    return bestRide;

}

console.log(fancyRide(30, [0.3, 0.5, 0.7, 1, 1.3]));