let jumlahGenap = 0;

console.log("=== ANGKA GENAP ===");

// Menampilkan angka genap
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
        jumlahGenap += i;
    }
}

console.log("=== ANGKA GANJIL ===");

// Menampilkan angka ganjil
for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

// Menampilkan jumlah angka genap
console.log("Jumlah seluruh angka genap:", jumlahGenap);