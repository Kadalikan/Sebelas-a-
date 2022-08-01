/**di indonesia punya beberapa mata uang pecahan
 * (100,200,500,1000,2000,5000,10000,20000,50000,750000
 * 100000)
 * 
 * Mbak salsa ingin membeli makan siang utk teman2nya
 * sejumlah 1.340.800. Bearapa jumlah uang yang harus
 * disiapkan oleh mbak salsa?
 */

let pecahan = [100000, 75000, 50000, 20000, 10000,
    5000, 2000, 1000, 500, 200, 100]

let nominal = 1340800
let hasil = []

for (let index = 0; index < pecahan.length; index++) {
    /**cek nominal dengan pecahan */
    if (nominal > pecahan[index]) {
        /**mengetahui jumlah uang */
        /**math.floor = pembulatan ke bawah */
        let jumlahUang = Math.floor(nominal / pecahan[index])
        
        /**menentukan nominal sisa */
        nominal = nominal % pecahan[index]

        hasil.push({
            pecahan: pecahan[index],
            jumlah: jumlahUang
        })
    
    }
}

console.log(hasil);