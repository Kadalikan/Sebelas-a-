let beratTinggi = [
    { nama: "John Cena", tinggi: 1.8, berat: 80 },
    { nama: "Bobby Lesley", tinggi: 1.6, berat: 90 },
    { nama: "Undertaker", tinggi: 1.76, berat: 100 },
    { nama: "Khali", tinggi: 2, berat: 120 },
    { nama: "Rey", tinggi: 1.4, berat: 30 },
]
let statusBMI = []
for (let index = 0; index < beratTinggi.length; index++) {
    let bmi = beratTinggi[index].berat / (beratTinggi[index].tinggi * beratTinggi[index].tinggi)

    if (bmi < 18.5) {
        statusBMI.push({
            nama: beratTinggi[index].nama,
            hasil: bmi,
            status: "underweight"
        })
    }
    else if (bmi >= 18.5 && bmi < 24.9) {
        statusBMI.push({
            nama: beratTinggi[index].nama,
            hasil: bmi,
            status: "normal weight"
        })
    }
    else if (bmi >= 25.0 && bmi < 29.9) {
        statusBMI.push({
            nama: beratTinggi[index].nama,
            hasil: bmi,
            status: "overweight"
        })
    }
    else if (bmi > 30.0) {
        statusBMI.push({
            nama: beratTinggi[index].nama,
            hasil: bmi,
            status: "obese"
        })
    }

}

console.log(statusBMI);