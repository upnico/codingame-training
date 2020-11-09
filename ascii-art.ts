/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const L: number = parseInt(readline());
const H: number = parseInt(readline());
const T: string = readline().toLowerCase();
for (let i = 0; i < H; i++) {
    const ROW: string = readline();
    let finalString = '';
    for (let j = 0; j < T.length; j++) {
        let index = (T[j].charCodeAt(0) - 97) * L;
        (index < 0) && (index = 26 * L);
        finalString += ROW.slice(index, index + L)
    }
    console.log(finalString)
}

// Write an answer using console.log()
// To debug: console.error('Debug messages...');

