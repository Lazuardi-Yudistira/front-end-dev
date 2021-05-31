var tanya = true;
while (tanya) {
  // menangkap pilihan player

  var player = prompt("pilih : gajah, semut, orang");

  // menangkap pilihan komputer

  // membangkitkan bilangan random

  var comp = Math.random();

  if (comp < 0.34) {
    comp = "gajah";
  } else if (comp >= 0.34 && comp < 0.67) {
    comp = "orang";
  } else {
    comp = "semut";
  }
  var hasil = "";
  // menentukan rules

  if (player == comp) {
    hasil = "SERI";
  } else if (player == "gajah") {
    if (comp == "orang") {
      hasil = "MENANG";
    } else {
      hasil = "KALAH";
    }
  } else if (player == "orang") {
    if (comp == "gajah") {
      hasil = "KALAH";
    } else {
      hasil = "MENANG";
    }
  } else if (player == "semut") {
    if (comp == "gajah") {
      hasil = "MENANG";
    } else {
      hasil = "KALAH";
    }
  } else {
    hasil = "Memasukkan pilihan yang salah!";
  }

  // tampilkan hasilnya

  alert("Kamu memilih : " + player + " dan komputer memilih : " + comp + "\nMaka hasilnya : Kamu " + hasil);

  tanya = confirm("lagi?");
}

alert("Terimakasih sudah bermain!");
