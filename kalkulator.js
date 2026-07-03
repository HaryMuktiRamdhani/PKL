const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function hitungBelanja() {
    rl.question("Masukkan total belanja: ", function(inputBelanja) {

        if (inputBelanja.toLowerCase() === "exit") {
            console.log("Program selesai.");
            rl.close();
            return;
        }

        let totalBelanja = parseFloat(inputBelanja);

        rl.question("Apakah member? (true/false): ", function(inputMember) {

            let member = inputMember.toLowerCase();
            let diskon = 0;

            if (isNaN(totalBelanja) || totalBelanja < 0) {
                console.log("Input total belanja tidak valid!");
            } else {

                if (member === "true") {

                    if (totalBelanja < 100000) {
                        diskon = 0.05;
                    } else if (totalBelanja <= 300000) {
                        diskon = 0.10;
                    } else {
                        diskon = 0.15;
                    }

                } else if (member === "false") {

                    if (totalBelanja >= 200000) {
                        diskon = 0.05;
                    }

                } else {
                    console.log("Input member harus true atau false!");
                    console.log();
                    hitungBelanja();
                    return;
                }

                let potongan = totalBelanja * diskon;
                let totalBayar = totalBelanja - potongan;

                console.log("\n===== STRUK BELANJA =====");
                console.log("Total Belanja : Rp", totalBelanja);
                console.log("Member        :", member);
                console.log("Diskon        :", (diskon * 100) + "%");
                console.log("Potongan      : Rp", potongan);
                console.log("Total Bayar   : Rp", totalBayar);
            }

            console.log();
            hitungBelanja();
        });
    });
}

hitungBelanja();