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

var angka = prompt("masukkan angka :");

switch (angka) {
  case "1":
    alert(" anda memasukkan angka 1");
    break;
  case "2":
    alert(" anda memasukkan angka 2");
    break;
  case "3":
    alert(" anda memasukkan angka 3");
    break;
  default:
    alert(" angka yang anda masukkan salah!");
    break;
}
