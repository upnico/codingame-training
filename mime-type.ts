/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const N: number = parseInt(readline()); // Number of elements which make up the association table.
const Q: number = parseInt(readline()); // Number Q of file names to be analyzed.

let Bareme: Map<string, string> = new Map()
for (let i = 0; i < N; i++) {
    var inputs: string[] = readline().split(' ');
    const EXT: string = inputs[0]; // file extension
    const MT: string = inputs[1]; // MIME type.
    Bareme.set(EXT.toUpperCase(), MT)
}
for (let i = 0; i < Q; i++) {
    const FNAME: string = readline(); // One file name per line.
    let ext = FNAME.split('.')
    if (ext.length < 2)
        console.log("UNKNOWN")
    else
        console.log(Bareme.get(ext[ext.length-1].toUpperCase()) || "UNKNOWN")
}

// Write an answer using console.log()
// To debug: console.error('Debug messages...');


// For each of the Q filenames, display on a line the corresponding MIME type. If there is no corresponding type, then display UNKNOWN.
