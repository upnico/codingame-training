/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const N: number = parseInt(readline());
if (N < 2)
    console.log(parseInt(readline()))
let ArrHorse: Array<number> = new Array()
for (let i = 0; i < N; i++) {
    const pi: number = parseInt(readline());
    ArrHorse.push(pi);
}

ArrHorse.sort((a:any, b:any) => { return a - b})
let smallEcart: number = ArrHorse[1] - ArrHorse[0];

for (let i = 2; i < ArrHorse.length; i++)
    if (ArrHorse[i] - ArrHorse[i-1] < smallEcart)
        smallEcart = ArrHorse[i] - ArrHorse[i-1]

// Write an answer using console.log()
// To debug: console.error('Debug messages...');

console.log(smallEcart);
