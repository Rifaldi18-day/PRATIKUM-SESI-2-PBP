const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan nama mahasiswa: ", function(nama) {
    rl.question("Masukkan nilai tugas: ", function(tugas) {
        rl.question("Masukkan nilai uts: ", function(uts) {
            rl.question("Masukkan nilai uas: ", function(uas) {

                const ntugas = parseFloat(tugas);
                const nuts = parseFloat(uts);
                const nuas = parseFloat(uas);

                const nilaiAkhir = (ntugas * 0.3) + (nuts * 0.3) + (nuas * 0.4);
                
                console.log("Nama Mahasiswa: ", nama);
                console.log("Nilai tugas: ", ntugas);
                console.log("nilai uts: ", nuts);
                console.log("Nama uas: ", nuas);
                console.log("Nilai akhir: ", nilaiAkhir);

            });
        });
    });
});