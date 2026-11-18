// Data barang
const hargaBarang = 25000;
const jumlahBarang = 4;
const diskon = 10;

// Menghitung total harga
const totalHarga = hargaBarang * jumlahBarang;

// Menghitung besaran diskon
const potongan = totalHarga * diskon / 100;

// Menghitung total pembayaran
const totalPembayaran = totalHarga - potongan;

// Menampilkan hasil
console.log("=== TOTAL BELANJA ===");
console.log("Total Harga: Rp" + totalHarga);
console.log("Diskon: Rp" + potongan);
console.log("Total Pembayaran: Rp" + totalPembayaran);