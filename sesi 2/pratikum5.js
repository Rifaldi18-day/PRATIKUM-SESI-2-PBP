const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan angka: ", function(input) {
    const angka = parseInt(input);

    if (isNaN(angka)) {
        console.log("Input bukan angka yang valid!");
    } else if (angka % 2 === 0) {
        console.log(`${angka} adalah angka GENAP.`);
    } else {
        console.log(`${angka} adalah angka GANJIL.`);
    }
    rl.close();
});