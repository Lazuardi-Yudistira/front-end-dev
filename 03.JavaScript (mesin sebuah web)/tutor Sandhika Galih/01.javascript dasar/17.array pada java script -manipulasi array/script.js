// Manipulasi Array

// 1.Menambah isi array
// var arr = [];
// arr[0] = "yudi";
// arr[1] = "lazu";
// arr[2] = "uti";
// arr[6] = 'mutia';

// console.log(arr);

// 2.Menghapus isi array
// var arr = ["yudi", "lazu", "uti"];
// arr[1] = undefined;
// console.log(arr);

// 3.Menampilkan isi array
// var arr = ["yudi", "lazu", "uti"];

// for (var i = 0; i < arr.length; i++) {
//   console.log("Mahasiswa ke-" + (i + 1) + " : " + arr[i]);
// }

// Method pada array
// 1.join
// yaitu mengubah isi array menjadi type string dan menampilkan secara default dengan rapi
// var arr = ["yudi", "lazu", "uti"];
// console.log(arr.join());

// 2.push & pop
// var arr = ["yudi", "lazu", "uti"];
// push  = menambah elemen  di akhir array nya
// pop = menghapus elemen  di akhir array nya
// arr.push("Mutia", "Uwuu");
// arr.pop();
// console.log(arr.join());

// 3.unshift & shift
// var arr = ["yudi", "lazu", "uti"];
// sama seperti push & pop cuma bedanya yg ini menambah atau menghapus elemen di awal array nya
// unshift = menambah elemen di awal array nya
// shift = menghapus elemn di awal array nya
// arr.unshift("Mutia", "Uwuu");
// arr.shift();
// console.log(arr.join());

// 4.splice
// var arr = ["yudi", "lazu", "uti"];
// splice(indexAwal, mauDihapusBerapa, elemenBaru1,elemenBaru2,...)
// arr.splice(2, 0, "mutia", "munyu");
// console.log(arr.join());

// 5.slice
// mengiris sebuah array menjadi array baru
// slice(awal,akhir);
// var arr = ["yudi", "lazu", "uti", "mutia", "munyu"];
// var arr2 = arr.slice(1, 3);
// console.log(arr2.join());

// 6.foreach
// var angka = [1, 2, 3, 4, 5, 6, 7, 8];
// for(var i=0; i < angka.length; i++) {
// console.log(angka[i]);
// }
// bisa ditulis jg sbb:
// angka.forEach(function (e) {
//   console.log(e);
// });

// 7.map
// mirip dengan for each, tetapi kalau map mengembalikan array kalau for each tidak
// var angka = [1, 2, 3, 5, 3, 6, 8, 4];
// var angka2 = angka.map(function (e) {
//   return e * 2;
// });
// console.log(angka2.join());

// 8.sort
// untuk mengurutkan
// var angka = [1, 2, 3, 5, 3, 6, 8, 4, 10, 20];
// angka.sort(function (a, b) {
//   return a - b;
// });
// console.log(angka.join());

// 9.filter
// digunakan untuk mencari elemen pada array
// filter mengembalikan banyak nilai
// var angka = [1, 2, 3, 5, 3, 6, 8, 4, 10, 20];
// var angka2 = angka.filter(function (x) {
//   return x > 5;
// });
// console.log(angka2);

// 10.find
// digunakan untuk mencari elemen pada array
// find hanya mengembalikan satu nilai
var angka = [1, 2, 3, 5, 3, 6, 8, 4, 10, 20];
var angka2 = angka.find(function (x) {
  return x > 5;
});
console.log(angka2);
