const keranjang1 = [
    { id: "P1", nama: "kaos", qty: 2 },
    { id: "P2", nama: "Topi", qty: 1 }
];

const keranjang2 = [
    { id: "P2", nama: "Topi", qty: 3 },
    { id: "P3", nama: "Sepatu", qty: 1 }
];

for (let i = 0; i < keranjang2.length; i++) {
    let ditemukan = false;

        for (let j = 0; j < keranjang1.length; j++) {
            if (keranjang2[i].id === keranjang1[j].id) {
                keranjang1[j].qty += keranjang2[i].qty;
                ditemukan = true;
            }
        }
        if (ditemukan === false) {
            keranjang1.push(keranjang2[i]);
        }
    }

console.log(keranjang1);