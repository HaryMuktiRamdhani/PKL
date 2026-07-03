const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function cekKelulusan() {
    rl.question("Masukkan nilai ujian (0-100): ", function(inputNilai) {

        if (inputNilai.toLowerCase() === "exit") {
            console.log("Program selesai.");
            rl.close();
            return;
        }

        let nilai = parseInt(inputNilai);

        if (isNaN(nilai) || nilai < 0 || nilai > 100) {
            console.log("Input tidak valid!");
        } else if (nilai < 60) {
            console.log("Status: Tidak Lulus");
        } else if (nilai <= 75) {
            console.log("Status: Lulus");
            console.log("Klasifikasi: Cukup");
        } else if (nilai <= 90) {
            console.log("Status: Lulus");
            console.log("Klasifikasi: Memuaskan");
        } else {
            console.log("Status: Lulus");
            console.log("Klasifikasi: Sangat Memuaskan");
        }

        console.log();
        cekKelulusan();
    });
}

cekKelulusan();