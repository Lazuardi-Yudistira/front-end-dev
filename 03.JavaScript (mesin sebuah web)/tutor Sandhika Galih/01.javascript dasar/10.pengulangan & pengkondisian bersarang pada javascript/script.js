// pengulangan dalam pengulangan,contohnya sbb:

// 1)15 baris 15 bintang :
// var s = "";
// for (var i = 0; i < 15; i++) {
//   for (var j = 0; j < 10; j++) {
//     s += "*";
//   }
//   s += "\n";
// }
// console.log(s);

// 2)15 baris beruturan dari 1 bintang :
// var s = "";
// for (var i = 0; i < 15; i++) {
//   for (var j = 0; j <= i; j++) {
//     s += "*";
//   }
//   s += "\n";
// }
// console.log(s);

// 3)15 baris beruturan dari 15 bintang mundur :
var s = "";
for (var i = 15; i > 0; i--) {
  for (var j = 0; j < i; j++) {
    s += "*";
  }
  s += "\n";
}
console.log(s);
