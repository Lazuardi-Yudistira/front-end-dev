// DOM Selection
// document.getElementById() ->mengembalikan  1 element id
const judul = document.getElementById("judul"); //membuat variabel dengan nama judul
judul.style.color = "red"; //mulai merubah style variabel tersebut
judul.style.backgroundColor = "#ccc";
judul.innerHTML = "yudi";

// document.getElementsByTagName() -> mengembalikan HTMLCollections(lebih dari 1 element)
const p = document.getElementsByTagName("p");

for (let i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = "lightblue";
}

const h1 = document.getElementsByTagName("h1")[0];
h1.style.fontSize = "50px";

// document.getElementsByClassName() -> mengembalikan HTMLCollections(lebih dari 1 element)
const p1 = document.getElementsByClassName("p1")[0];
p1.innerHTML = "Ini diubah dari javascript";
