function launchSequenceChecker(systemNames: string[], stepNumbers: number[]): boolean {
    const systems = {};

    // Loop over the systemNames
    for (let i = 0; i < systemNames.length; i++) {
        // If the current system is already in the systems object
        if (systems.hasOwnProperty(systemNames[i])) {
            // if the stepNumber in the system object is > the current stepNumber
            if (systems[systemNames[i]] > stepNumbers[i]) {
                return false;
            }
        }
        // Add/update the current systemName and stepNumber to the systems object
        systems[systemNames[i]] = stepNumbers[i];
		}

    return true;
}

console.log(launchSequenceChecker(["stage_1", "stage_2", "dragon", "stage_1", "stage_2", "dragon"], [1, 10, 11, 2, 12, 111]));
console.log(launchSequenceChecker(["stage_1", "stage_1", "stage_2", "dragon"], [2, 1, 12, 111]));