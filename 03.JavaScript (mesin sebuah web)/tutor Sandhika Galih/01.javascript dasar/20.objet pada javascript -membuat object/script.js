// membuat Object
// menggunakan Object Literal
var mhs1 = {
  nama: "lazuardi yudistira",
  nrp: "0452512",
  email: "yudhistira.lazuardi2@gmail.com",
  jurusan: "Teknik elektro",
};

var mhs2 = {
  nama: "uti rida",
  nrp: "04525122",
  email: "cimi2@gmail.com",
  jurusan: "Pendidikan Bahasa Arab",
};

// menggunakan Function Declaration
function buatObjectMahasiswa(nama, nrp, email, jurusan) {
  var mhs = {};
  mhs.nama = nama;
  mhs.nrp = nrp;
  mhs.email = email;
  mhs.jurusan = jurusan;
  return mhs;
}

var mhs3 = buatObjectMahasiswa("Mutia", "022521", "mutia@yahoo.com", "Sastra Arab");
var mhs4 = buatObjectMahasiswa("Haqi", "022532", "haqi@yahoo.com", "Teknik Elektro");

// menggunakan Constructor
// penulisan declarasi mahasiswa menggunakan huruf besar di awal, jadi nulisnya Mahasiswa
// kalau menggunakan function constructor tidak perlu menulis var mhs dan return mhs, tetapi wajib menulis new saat memanggil mahasiswa
function Mahasiswa(nama, nrp, email, jurusan) {
  this.nama = nama;
  this.nrp = nrp;
  this.email = email;
  this.jurusan = jurusan;
}

var mhs5 = new Mahasiswa("Lutfi", "2525521", "lutfi@yahoo.com", "Teknik Informatika");
var mhs6 = new Mahasiswa("Sari", "3725521", "sari@yahoo.com", "Teknik Informatika");
