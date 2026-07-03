const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function inputNilai() {
    rl.question("Masukkan nilai (0-100): ", function(input) {

        if (input.toLowerCase() === "exit") {
            console.log("Program selesai.");
            rl.close();
            return;
        }

        let nilai = parseInt(input);

        if (isNaN(nilai) || nilai < 0 || nilai > 100) {
            console.log("Input tidak valid");
        } else if (nilai >= 90) {
            console.log("Predikat: A");
        } else if (nilai >= 80) {
            console.log("Predikat: B");
        } else if (nilai >= 70) {
            console.log("Predikat: C");
        } else if (nilai >= 60) {
            console.log("Predikat: D");
        } else {
            console.log("Predikat: E");
        }

        console.log();
        inputNilai();
    });
}

inputNilai();