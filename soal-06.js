// Data nilai mahasiswa
const nilai = [80, 75, 90, 65, 85, 95, 70];

// Menampilkan seluruh nilai
console.log("Seluruh Nilai:", nilai);

// Mencari nilai tertinggi dan terendah
const tertinggi = Math.max(...nilai);
const terendah = Math.min(...nilai);

// Menghitung rata-rata
const total = nilai.reduce((jumlah, angka) => jumlah + angka, 0);
const rataRata = total / nilai.length;

// Menghitung mahasiswa yang lulus
const jumlahLulus = nilai.filter(angka => angka >= 75).length;

// Menampilkan hasil
console.log("Nilai Tertinggi:", tertinggi);
console.log("Nilai Terendah:", terendah);
console.log("Nilai Rata-rata:", rataRata);
console.log("Jumlah Mahasiswa Lulus:", jumlahLulus);