const keranjang1 = [
    { id: "P1", nama: "Kaos", qty: 2 },
    { id: "P2", nama: "Topi", qty: 1 }
];

const keranjang2 = [
    { id: "P2", nama: "Topi", qty: 3 },
    { id: "P3", nama: "Sepatu", qty: 1 }
];

function gabungKeranjang(data1, data2) {

    let keranjangBaru = [];

    for (let i = 0; i < data1.length; i++) {
        keranjangBaru.push({
            id: data1[i].id,
            nama: data1[i].nama,
            qty: data1[i].qty
        });
    }

    for (let i = 0; i < data2.length; i++) {
        let ditemukan = false;

        for (let j = 0; j < keranjangBaru.length; j++) {
            if (data2[i].id === keranjangBaru[j].id) {
                keranjangBaru[j].qty += data2[i].qty;
                ditemukan = true;
                break;
            }
        }

        if (!ditemukan) {
            keranjangBaru.push({
                id: data2[i].id,
                nama: data2[i].nama,
                qty: data2[i].qty
            });
        }
    }

    return keranjangBaru;
}

const hasilGabungan = gabungKeranjang(keranjang1, keranjang2);

console.log("Keranjang 1:");
console.log(keranjang1);

console.log("Keranjang 2:");
console.log(keranjang2);

console.log("Hasil Gabungan:");
console.log(hasilGabungan);