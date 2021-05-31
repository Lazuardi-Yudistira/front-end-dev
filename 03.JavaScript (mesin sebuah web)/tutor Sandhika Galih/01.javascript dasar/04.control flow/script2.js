// pengkondisian atau percabangan
// digunakan untuk memberikan statement yang berbeda sesuai suatu kondisi
// if, if else, if else if, else, switch
// berikut penjelasan program dibawah ini:
// 1.masukan angka
// 2.lakukan pengecekan jika angka dibagi 2 sisa baginya 0, maka akan muncul tulisan bilangan genap
// 3.jika tidak, maka akan muncul tulisan ganjil
var angka = prompt("masukkan angka :");
if (angka % 2 === 0) {
  alert(angka + "adalah bilangan GENAP");
} else {
  alert(angka + "adalah bilangan GANJIL");
}
