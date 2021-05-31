// rekursif = sebuah fungi yg memanggil dirinya sendiri
// basecase = kondisi akhir dari rekursif yg menghasilkan nilai

// implementasi rekursif :
// 1.menggantikan looping
// 2.fibonanci
// 3.pencarian dan penelusuran pada struktur data list dan tree
// 4.bahas pemrograman yg tidak memiliki pengulangan, ex:haskel,erlang,prolog,dll

function cetakAngka(n) {
  if (n === 0) {
    return;
  }
  console.log(n);
  cetakAngka(n - 1);
}

cetakAngka(10);

// faktorial
// 5!= 5x4x3x2x1
// program sebelumnya juga dapat ditulus menggunakan faktorial,contohnya sbb :

/*
function faktorial(n) {
  if (n === 0) return 1;
  return n * faktorial(n - 1);
}
*/
