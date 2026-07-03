const omset = [1500000, 2300000, 950000, 4100000, 3200000, 1800000, 2900000];

let tertinggi = omset[0];

for (let i = 1; i < omset.length; i++) {
    if (omset[i] > tertinggi) {
        tertinggi = omset[i];
    }
}

console.log("penjualan tertinggi adalah :", tertinggi);