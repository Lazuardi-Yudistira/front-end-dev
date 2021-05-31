// event handling
// const close = document.querySelector(".close");
// const card = document.querySelector(".card");

// close.addEventListener("click", function () {
//   card.style.display = "none";
// });

// DOM Traversal
// const close = document.querySelectorAll(".close");

// for (let i = 0; i < close.length; i++) {
//   close[i].addEventListener("click", function (e) {
//     // close[i].parentElement.style.display = "none";
//     // e.target.parentElement.style.display = "none";
//   });
// }

// // cara lain
// close.forEach(function (el) {
//   el.addEventListener("click", function (e) {
//     e.target.parentElement.style.display = "none";
//     // cegah aksi defaultnya yaitu pada a href menggunakan preventDefault
//     e.preventDefault();
//     // stop efek bubblingnya menggunakan stopPropagation();
//     e.stopPropagation();
//   });
// });

// const cards = document.querySelectorAll(".card");
// cards.forEach(function (card) {
//   card.addEventListener("click", function (e) {
//     alert("ok");
//   });
// });

// program efektif dari program2 diatas yaitu sbb:
const container = document.querySelector(".container");

container.addEventListener("click", function (e) {
  if (e.target.className == "close") {
    e.target.parentElement.style.display = "none";
    e.preventDefault();
  }
});

// DOM Traversal Method
// parentNode = node
// parentElement = element
// nextSibling = node
// nextElementSibling = element
// previousSibling = node
// previousElementSibling = element
