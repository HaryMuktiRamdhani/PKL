const idKaryawan = [101, 102, 103, 101, 104, 102, 105, 101];

function absenKaryawan(idKaryawan){
let idUnik = [];

for (let i = 0; i < idKaryawan.length; i++) {
    let sudahAda = false;

    for(let j = 0; j < idUnik.length; j++) {
        if (idKaryawan[i] === idUnik[j]) {
            sudahAda = true;
        }
    }
    if (sudahAda === false) {
        idUnik.push(idKaryawan[i]);
    }
}

return idUnik;
}

console.log(absenKaryawan(idKaryawan));