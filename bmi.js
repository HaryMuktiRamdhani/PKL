const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function hitungBMI() {
    rl.question("Masukkan berat badan (kg): ", function(inputBerat) {

        if (inputBerat.toLowerCase() === "exit") {
            console.log("Program selesai.");
            rl.close();
            return;
        }

        let berat = parseFloat(inputBerat);

        rl.question("Masukkan tinggi badan (cm): ", function(inputTinggi) {

            let tinggi = parseFloat(inputTinggi);

            if (isNaN(berat) || isNaN(tinggi) || berat <= 0 || tinggi <= 0) {
                console.log("Input tidak valid!");
            } else {
                tinggi = tinggi / 100;

                let bmi = berat / (tinggi * tinggi);

                console.log("BMI =", bmi.toFixed(2));

                if (bmi < 18.5) {
                    console.log("Status: Kurus");
                } else if (bmi < 25) {
                    console.log("Status: Normal");
                } else if (bmi < 30) {
                    console.log("Status: Kelebihan Berat Badan");
                } else {
                    console.log("Status: Obesitas");
                }
            }

            console.log();
            hitungBMI();
        });
    });
}

hitungBMI();