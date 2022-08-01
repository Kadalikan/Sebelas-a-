let anak = [
    { nama: "John Cena", tinggi: 1.8, berat: 80 },
    { nama: "Bobby Lesley", tinggi: 1.6, berat: 90 },
    { nama: "Undertaker", tinggi: 1.76, berat: 100 },
    { nama: "Khali", tinggi: 2, berat: 120 },
    { nama: "Rey Mysterio", tinggi: 1.4, berat: 30 }
]

let daftarbmi = []
for (let index = 0; index < anak.length; index++) {
    let bmi = anak[index].berat / (anak[index].tinggi * anak[index].tinggi)

    daftarbmi.push(
        { nama: anak[index].nama, bmi: bmi }
    )

    let klasifikasi = ""
    if (bmi < 18.5) {
        klasifikasi = "Kurang"
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        klasifikasi = "Normal"
    } else if (bmi >= 25 && bmi <= 29.9) {
        klasifikasi = "Lebih"
    } else {
        klasifikasi = "Obesitas"
    }

    daftarbmi[index].klasifikasi = klasifikasi
}

console.log(daftarbmi);