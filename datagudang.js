const gudang = [
    { nama: "Laptop", kategori: "Elektronik", stok: 5},
    { nama: "Kemeja", kategori: "Pakaian", stok: 20},
    { nama: "Smartphone", kategori: "Elektronik", stok: 12},
    { nama: "Celana", kategori: "Pakaian", stok: 15},
    { nama: "Headphone", kategori: "Elektronik", stok: 8},
];

let totalStok = 0;

for (let i = 0; i < gudang.length; i++) {
    if (gudang[i].kategori === "Elektronik") {
        totalStok += gudang[i].stok;
    }
}

console.log("Total stok Elektronik =", totalStok);