// penggunaan alert untuk memunculkan tulisan di pop up
alert("hellow world");
alert("assalamualaikum");
alert("perkenalkan");
alert("saya lazuardi");

// penggunaan prompt untuk memunculkan form
// penggunaan var digunakan agar tulisan yg kita ketik dapat disimpan dalam sebuah variabel
// gunakan alert(nama) agar memunculkan tulisan yang kita ketik di form pop up
// mengembalikan nilai tergantung dengan apa yang kita ketik di form nya
var nama = prompt("masukkan nama:");
alert(nama);

// penggunaan confirm untuk memunculkan pesan konfirmasi pada pop up
// mengembalikan nilai boolean, true kalau ok, false kalau cancel
confirm("kamu yakin?");

// contoh lain confirm
var tes = confirm("beneran yakin?");
alert(tes);

// contoh jika digunakan untuk pengkondisian
var tes2 = confirm("yakin seyakinnya?");
if (tes2 === true) {
  alert("user menekan OK!");
} else {
  alert("user menekan CANCEL!");
}
