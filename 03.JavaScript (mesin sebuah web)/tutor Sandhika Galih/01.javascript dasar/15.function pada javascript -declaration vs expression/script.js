// function Declaration :
// function identifier (parameterList optional) {functionBody}
// kelebihan : lebih fleksibel(dapat ditulis dimanapun), karena menggunakan konsep Hoisting
// mudah dipahami pemula

//contoh function declaration :
function tampilPesan(nama) {
  alert("halo " + nama);
}

// function Expression :
// function identifier optional (parameterList optional) {fungctionBody }
// kekurangan : harus didefinisikan terlebih dahulu sebelum dipanggil
// kelebihan : lebih powerfull. bisa dibuat sebagai closure, sebagai argumen utk function lain, sebagai IIFE(Immediately Invoked Function Expression)

//contoh function expression :
var tampilPesan = function (nama) {
  alert("halo " + nama);
};
