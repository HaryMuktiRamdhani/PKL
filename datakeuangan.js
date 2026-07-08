const omset = [1500000, 2300000, 950000, 4100000, 3200000, 1800000, 2900000];

function cariOmsetTertinggi(dataOmset) {
let tertinggi = omset[0];

for (let i = 1; i < dataOmset.length; i++) {
    if (dataOmset[i] > tertinggi) {
        tertinggi = dataOmset[i];
    }
}

return tertinggi;
}

console.log("penjualan tertinggi adalah :", cariOmsetTertinggi(omset));