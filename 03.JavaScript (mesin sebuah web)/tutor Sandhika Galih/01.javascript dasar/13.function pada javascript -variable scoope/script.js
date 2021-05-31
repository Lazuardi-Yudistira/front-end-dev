// global scope / window scope
// var a,  a adalah variable global yg bisa diakses semua termasuk dari dlm function scoope
// tetapi variabel yg di dalam function scoope hanya bisa di akses dalam function scoope tersebut

/*
var a = 1;

function tes() {
  var b = 2;
  console.log(a);
}

tes();
*/

// contoh kasus lain sbb:
// dalam kasus ini terdapat name conflict karena mempunyai nama variabel yg sama yaitu a,
// maka masing2 console log akan menampilkan variabel masing2, console log var a global akan menampilkan angka 1
// dan console log dalam var a function akan menampilkan angka 2
/*
var a = 1;
console.log(a);

function tes() {
  // name conflict
  var a = 2;
  console.log(a);
}
tes();
*/

// contoh kasus lain sbb:
// dengan menggunakan syntak window.a maka variabel yang akan ditampilkan console.log adalah
// variabel windownya atau variabel globalnya yaitu angka 1 bukan variabel lokal di function scope.

var a = 1;

function tes() {
  var a = 2;
  console.log(window.a);
}

tes();
