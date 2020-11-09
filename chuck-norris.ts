/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/
const value: any =  {
    "1": "0",
    "0": "00"
}

const MESSAGE: string = readline();
// Write an answer using console.log()
// To debug: console.error('Debug messages...');
let binaryF = '';
for (let i=0; i < MESSAGE.length; i++) {
   var binary = MESSAGE[i].charCodeAt(0).toString(2);
   binary.length < 7 ? binary = "0" + binary: ''
   binaryF += binary;
}
   
console.log(getValueFromChar(binaryF))
//console.log(finalString)

function getValueFromChar(char: string) {
   let binary = char
 
   //binary.length < 7 ? binary =  "0" + binary: ''
   let actualValue = binary[0]
   let finalString = value[binary[0]] + " 0";

   for (var j=1; j < binary.length; j++) {

       if (actualValue !== binary[j]) {
           finalString +=  " " + value[binary[j]] + " 0";
           actualValue = binary[j]
       }else { 
           finalString += "0"
       }
//        finalString += (actualValue !== binary[j])? " " + value[binary[j]] + " 0" && (actualValue=binary[j]): "0"
   }
   return finalString
}