// array
// sebuah variabel sakti
// digunakan untuk menyimpan banyak nilai dalam satu variabel
// ditulis dengan tanda [];

// contoh program sbb :

var binatang = ["kucing", "kelinci", "monyet", "panda", "koala", "sapi"];
// atau :

var binatang = [];
binatang = ["kucing", "kelinci", "monyet", "panda", "koala", "sapi"];
//

var binatang = [];
binatang = ["kucing", "kelinci", "monyet", "panda", "koala", "sapi"];

// menampilkan isi index nomer 4, yaitu kola
// urutan index berawal dari 0
console.log(binatang[4]);

// menampilkan jumlah elemen dalam array binatang
console.log(binatang.length);

// elemen pada array boleh beda type, misal ada string(huruf),interger(angka),boolean(true/false)
// contohnya sbb:
var myArr = ["teks", 2, false];

// bisa juga untuk memasukkan fungsi di dalam array:
var myArr2 = ["teks", 2, false, myFunc];

// bisa juga menyimpan array di dalam array (array multi dimensi):
var myArr3 = ["teks", 2, false, myFunc, [4, 5, 6]];
// jika ingin menampilkan array angka 5 pada array dalam maka penulisannya sbb:
console.log(myArr[4][1]);
