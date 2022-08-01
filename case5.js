let krisna = [
    {nama: "Beras Muntari", harga: 10000, jumlah : 100},
    {nama: "Minyak freshcare", harga: 200000, jumlah : 11},
    {nama: "Sirup Mahjan", harga: 12000, jumlah : 20},
]

let totalHarga = 0
for (let index = 0; index < krisna.length; index++) {
    totalHarga += (krisna[index].harga*krisna[index].jumlah)
    
}
console.log("Total Harga belanjaan Pak krisna sebesar Rp"+totalHarga)
