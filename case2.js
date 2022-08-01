let umur = [30,107,45,60,15,80,73,28]
let muda = 0
let dewasa = 0
let tua = 0
let senja = 0
for (let index = 0; index < umur.length; index++) {
   if (umur[index] >=10 && umur[index] <=30) {
    muda++
   }
   else if (umur[index]>=31 && umur[index] <=50) {
    dewasa++
   }
   else if (umur[index]>=51 && umur[index]<=100) {
    tua++
   }
   else if (umur[index]>=100) {
    senja++
   }
  
}
console.log("hasil muda"+ muda );
console.log("hasil dewasa" +dewasa);
console.log("hasil tua" + tua);
console.log("hasil senja" +senja);