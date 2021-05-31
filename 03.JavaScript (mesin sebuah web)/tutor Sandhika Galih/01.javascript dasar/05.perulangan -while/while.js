// while(kondisi) {aksi};
// selama kondisi bernilai true maka lakukan aksi dalam blok kurawal
// dibawah adalah contoh infinity loop(perulangan yg tidak akan berakhir)

/* 
  while (true) {
  console.log("hello world");
 } 
 */

// dibawah contoh loop yg bisa berhenti ketika diklik tombol cancel
/*
var ulang = true;
while (ulang) {
  console.log("hello world");
  ulang = confirm("lagi?");
}
*/

/*contoh lain sbb:
nilai awal
while(kondisi terminasi) {
aksi
increment / decrement }
*/

// increment untuk penambahan dari nilai awal, decrement untuk pengurangan
var nilaiAwal = 1;
while (nilaiAwal <= 5) {
  console.log("hello world");
  nilaiAwal++;
}
