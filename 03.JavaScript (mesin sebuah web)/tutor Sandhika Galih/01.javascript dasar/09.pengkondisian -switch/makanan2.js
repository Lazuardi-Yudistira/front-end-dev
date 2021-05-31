/*
switch(ekspresi) {
    case "nilai 1":
        aksi 1;
        [break;]
        case "nilai 2":
            aksi 2;
            [break;]
            case "nilai n":
                aksi n;
                [break;]
                default:
                    aksi default
                    [break;]
}
*/

// var item = prompt("masukkan nama makananan / minuman : \n (cth: nasi, daging, susu, hamburger, softdrink)");

//switch (item) {
//   case "nasi":
//     alert(" makanan/minuman SEHAT!");
//     break;
//   case "daging":
//     alert(" makanan/minuman SEHAT!");
//     break;
//   case "susu":
//     alert(" makanan/minuman SEHAT!");
//     break;

//   case "hamburger":
//     alert(" makanan/minuman TIDAK SEHAT!");
//     break;
//   case "softdrink":
//     alert(" makanan/minuman TIDAK SEHAT!");
//     break;

//   default:
//     alert(" anda memasukkan nama makanan/minuman yang salah! ");
//     break;
// }

// dibawah ini adalah contoh penyederhanaan program diatas (hasilnya sama) :

var item = prompt("masukkan nama makananan / minuman : \n (cth: nasi, daging, susu, hamburger, softdrink)");

switch (item) {
  case "nasi":
  case "daging":
  case "susu":
    alert(" makanan/minuman SEHAT!");
    break;

  case "hamburger":
  case "softdrink":
    alert(" makanan/minuman TIDAK SEHAT!");
    break;

  default:
    alert(" anda memasukkan nama makanan/minuman yang salah! ");
    break;
}
