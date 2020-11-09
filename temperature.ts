/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const n: number = parseInt(readline()); // the number of temperatures to analyse
var inputs: string[] = readline().split(' ');
let arrInt: Array<number> = new Array();
for (let i = 0; i < n; i++) {
    const t: number = parseInt(inputs[i]);// a temperature expressed as an integer ranging from -273 to 5526
    arrInt.push(t);
}

arrInt.sort((a:number, b: number) => { return Math.abs(a)-Math.abs(b)})

// Write an answer using console.log()
// To debug: console.error('Debug messages...');

arrInt[0] = Math.abs(arrInt[0]) == Math.abs(arrInt[1]) && arrInt[0] < arrInt[1] ? arrInt[0] = arrInt[1] : arrInt[0] 
console.log(arrInt[0] || 0);
