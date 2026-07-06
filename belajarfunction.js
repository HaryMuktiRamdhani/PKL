// Luas segitiga///
function luasSegitiga(alas, tinggi) {
    return (alas * tinggi) / 2;
}
console.log("Luas segitiga:", luasSegitiga(10, 5));


// Luas lingkaran///
function luasLingkaran(jarijari) {
    return Math.PI * jarijari * jarijari; 
}
console.log("luas lingkaran:", luasLingkaran(7).toFixed(2));


// Luas permukaan kubus///
function luasPermukaanKubus(sisi) {
    return 6 * sisi * sisi;
}
console.log("luas permukaan kubus:", luasPermukaanKubus(4));


// luas permukaan balok//
function luasPermukaanBalok(panjang, lebar, tinggi) {
    return 2 * (panjang * lebar + panjang * tinggi + lebar * tinggi);
}
console.log("luas permukaan balok:", luasPermukaanBalok(5, 3, 2));


// luas tabung//
function luasTabung(jarijari, tinggi) {
    return 2 * Math.PI * jarijari * (jarijari + tinggi);
}
console.log("luas tabung:", luasTabung(4, 10).toFixed(2));


// volume kubus//
function volumeKubus(sisi) {
    return sisi * sisi * sisi;
}
console.log("Volume kubus:", volumeKubus(3));


// volume balok//
function volumeBalok(panjang, lebar, tinggi) {
    return panjang * lebar * tinggi;
}
console.log("volume balok:", volumeBalok(5, 3, 2));


// volume tabung//
function volumeTabung(jarijari, tinggi) {
    return Math.PI * jarijari * jarijari * tinggi;
}
console.log("volume tabung:", volumeTabung(4, 10).toFixed(2));