/**case4:
 * Bu Tiara mempunyai harta kekayaan yaitu mobil seharga
 * 3.000.000.000, lahan seharga 10.000.000.000,
 * dan kos-kosan seharga 500.000.000 */

/*** Bu Aurel mempunyai harta kekayaan yaitu mobil seharga
 * 4.000.000.000, lahan seharga 5.000.000.000,
 * dan kos-kosan seharga 800.000.000 */

/**Pak Firdi sebagai petugas pajak ingin menghitung selisih
 * padak dari Bu Tiara dan Bu Aurel. Pajaknya adalah 20%
 * dari total harta dipunyai.
 * Bantu Pak Firdi untuk menghitung selisih pajaknya*/


let tiara = {
    mobil: 3000000000,
    lahan: 10000000000,
    kos: 500000000

}

let aurel = {
    mobil: 4000000000,
    lahan: 5000000000,
    kos: 800000000
}

let hartaTiara = tiara.mobil + tiara.lahan + tiara.kos
let hartaAurel = aurel.mobil + aurel.lahan + tiara.kos

let pajakTiara = (20 / 100) * hartaTiara
let pajakAurel = (20 / 100) * hartaAurel

let selisih = pajakAurel - pajakTiara

if (selisih < 0) {
    selisih = selisih * -1
}

console.log("Selisih pajak aurel dan tiara adalah " + selisih);