/**
 * Raju sedang menunggu HARBOLNAS. Marketplace Shippy sedang 
 * membuat diskon besar2an. Raju membeli barang sept berikut.
 * - Mouse sejumlah 10 (@20.000)
 * - RAM sejumlah 5 (@100.000)
 * - RJ45 sejumlah 100 (@1000)
 * - Motherboard sejumalh 3 (500.000)
 * 
 * Aplikasi Shippy memberi diskon 10% jika jumlah item yang dibeli lebih dari 5.
 * Berapa nominal yang harus dibayar Raju
 */
 
 let item = [
    {nama : "Mouse", jumlah : 10, harga : 20000},
    {nama : "RAM", jumlah : 5, harga : 100000},
    {nama : "RJ45", jumlah : 100, harga : 1000},
    {nama : "Motherboard", jumlah : 3, harga : 500000}
]
let nominal = 0

for (let index = 0; index < item.length; index++) {
    if(item[index].jumlah > 5){
        nominal += (90/100) * (item[index].jumlah*item[index].harga)
    }else{
        nominal += (item[index].jumlah * item[index].harga)
    }
}

console.log("Nominal yang harus dibayar Raju adalah sebesar Rp"+nominal);
