/**
 * case3: Bu Gaul mempunyai data berat badan siswa
 * seperti berikut ini
 * 90,31,55,70,80,40,30
 * 
 * Bu Gaul ingin mengetahui jumlah siswa yang berat
 * badannya di atas rata-rata. Please help Bu Nurul!!!
 */

 let beratbadan = [90, 31, 55, 70, 80, 40, 30]
 let diatasrata = 0
 let berat = 0
 
 for (let index = 0; index < beratbadan.length; index++) {
     berat+=beratbadan[index]
 }
 let ratarata = berat/beratbadan.length
 for (let index = 0; index < beratbadan.length; index++) {
     if (beratbadan[index] > ratarata){
         diatasrata++
     }
 }
 
 console.log("Banyak anak yang berat badannya diatas rata rata adalah "+diatasrata+" anak");