// var a = 8;
// var b = 3;
// var volumeA;
// var volumeB;
// var total;

// volumeA = a * a * a;
// volumeB = b * b * b;

// total = volumeA + volumeB;
// console.log(total);

// program diatas jika ditulis menggunakan function maka seperti dibawah ini :
// program membuat function :
function jumlahVolumeDuaKubus(a, b) {
  var volumeA;
  var volumeB;
  var total;

  volumeA = a * a * a;
  volumeB = b * b * b;
  total = volumeA + volumeB;

  return total;
}
// program menjalankan function diatas :
console.log(jumlahVolumeDuaKubus(8, 3));

// 8 adalah variabel parameter a dan 3 adalah variabel parameter b
