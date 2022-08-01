/**
 * Bu Naura adalah guru Ilmu Ghoib
 * mempunyai data nilai siswa sebagai berikut
 * 
 * Nama     Tugas     UH     UAS
 * Kaizo     80       70      98
 * Yaya      90       60      50
 * Ciciko    70       70      85
 * 
 * Bu Naura ingin menghitung nilai akhir dari tiap siswanya
 * dengan rumus Tugas (30%),UH(40%),
 * UAS(30%),Bantulah Bu Naura untuk menghitung nilai tersebut
 */

let nilai = [
    { nama: "Kaizo ", tugas: 80, uh: 70, uas: 98 },
    { nama: "Yaya ", tugas: 90, uh: 60, uas: 50 },
    { nama: "Ciciko", tugas: 70, uh: 70, uas: 85 },
]

let nilaiSiswa = []

for (let index = 0; index < nilai.length; index++) {
    let nilaiTugas = (30 / 100) * nilai[index].tugas
    let nilaiUH = (40 / 100) * nilai[index].uh
    let nilaiUAS = (30 / 100) * nilai[index].uas
    let nilaiAkhir = nilaiTugas + nilaiUH + nilaiUAS
    nilai[index].na = nilaiAkhir

    /**add object to array nilaiSiswa */
    nilaiSiswa.push({
        nama: nilai[index].nama,
        na: nilaiAkhir
    })
}

console.log(nilaiSiswa);