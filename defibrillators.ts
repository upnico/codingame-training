/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/
class Défibrilateur {
    name: string;
    long: number;
    lat: number;
    distanceFromUser: number;

    constructor(data) {
        this.name = data.name;
        this.long = data.long;
        this.lat = data.lat
    }

    setDistanceFromUser(dist) {
        this.distanceFromUser = dist;
    }
}

function getInfoFromData(data) {
    let newData = data.replace(/,/g, ".").split(";")
    let sendData = {
        name: newData[1],
        long: newData[4],
        lat: newData[5],
    }
    return sendData
}

const LON: string = readline();
const LAT: string = readline();
let lat: number = Number(LAT.replace(/,/g, "."));
let long : number = Number(LON.replace(/,/g, "."));
const N: number = parseInt(readline());
let List: Array<Défibrilateur> = new Array()
for (let i = 0; i < N; i++) {
    const DEFIB: string = readline();
    List.push(new Défibrilateur(getInfoFromData(DEFIB)));
}

for (let i= 0; i < List.length; i++) {
    let obj = List[i]
    let x = (Number(obj.long) - long) * Math.cos(lat + Number(obj.lat)/2)
    let y = (Number(obj.lat) - lat)
    let distance = Math.sqrt((x*x) + (y*y)) * 6371
    List[i].setDistanceFromUser(distance)
}

List.sort((a: Défibrilateur, b: Défibrilateur) => { return a.distanceFromUser - b.distanceFromUser })
// Write an answer using console.log()
// To debug: console.error('Debug messages...');
console.log(List[0].name);
