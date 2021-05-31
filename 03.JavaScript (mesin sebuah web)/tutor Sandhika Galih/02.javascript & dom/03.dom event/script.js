// DOM Event
// Event handler :
// 1.membuat event onclik pada p3 menggunakan inline html attribute
const p3 = document.querySelector(".p3");

function ubahWarnaP3() {
  p3.style.backgroundColor = "lightblue";
}

// 2.membuat event onclick pada p2 menggunakan method javascript
const p2 = document.querySelector(".p2");

function ubahWarnaP2() {
  p2.style.backgroundColor = "lightblue";
}

p2.onclick = ubahWarnaP2;

// addEventListener()
const p4 = document.querySelector("section#b p");
p4.addEventListener("click", function () {
  const ul = document.querySelector("section#b ul");
  const liBaru = document.createElement("li");
  const teksLiBaru = document.createTextNode("item baru");
  liBaru.appendChild(teksLiBaru);
  ul.appendChild(liBaru);
});
