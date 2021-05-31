//DOM Manipulation

// const judul = document.getElementById("judul");
// judul.innerHTML = "<em>lazuardi yudistira</em>";

// const sectionA = document.querySelector("section#a");
// sectionA.innerHTML = "hello world";

// const judul = document.querySelector("#judul");
// judul.style.color = "lightblue";
// judul.style.backgroundColor = "salmon";

// const judul = document.getElementsByTagName("h1")[0];
// judul.setAttribute("name", "yudi");

//  buat elemen baru
const pBaru = document.createElement("p");
const teksPBaru = document.createTextNode("paragraf baru");
// simpan tulisan ke dalam paragraf
pBaru.appendChild(teksPBaru);
// simpan pBaru di akhir Section A
const sectionA = document.getElementById("a");
sectionA.appendChild(pBaru);

// buat li baru
const liBaru = document.createElement("li");
const teksLiBaru = document.createTextNode("item baru");
liBaru.appendChild(teksLiBaru);

const ul = document.querySelector("section#b ul");
const li2 = ul.querySelector("li:nth-child(2)");

ul.insertBefore(liBaru, li2);

// remove child
const link = document.getElementsByTagName("a")[0];
sectionA.removeChild(link);

// replace child
const sectionB = document.getElementById("b");
const p4 = sectionB.querySelector("p");

const h2Baru = document.createElement("h2");
const teksH2Baru = document.createTextNode("Judul Baru");

h2Baru.appendChild(teksH2Baru);
sectionB.replaceChild(h2Baru, p4);

// penanda elemen yang diganti
pBaru.style.backgroundColor = "lightgreen";
liBaru.style.backgroundColor = "lightgreen";
h2Baru.style.backgroundColor = "lightgreen";
