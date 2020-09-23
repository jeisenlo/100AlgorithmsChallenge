function incrementalBackups(lastBackupTime: number, changes: number[][]): number[] {
    const filesToBackup: number[] = [];

    // Loop over changes
    for(let change of changes) {
        // If the file change happened after the last backup
        // AND, this file is not already within the filesToBackup array
        if (change[0] > lastBackupTime
            && !filesToBackup.includes(change[1])) {
            filesToBackup.push(change[1]);
        }
    }

    return filesToBackup.sort((a, b) => a - b);
}

console.log(incrementalBackups(461620205, [[461620203, 1], 
    [461620204, 2], 
    [461620205, 6],
    [461620206, 5], 
    [461620207, 3], 
    [461620207, 5], 
    [461620208, 1]]));
