// var title = document.getElementById("title");
// title.style.color = "red";
// title.innerText = "Hello world";
// console.log(title);
// var inputs = document.getElementsByTagName("input");
// console.log(inputs[0]);
// var paras = document.getElementsByClassName("para");
// console.log(paras);

// var title = document.querySelector("#title");
// console.log(title);
// var inputs = document.querySelectorAll("input");
// console.log(inputs);
// var paras = document.querySelectorAll(".para");
// console.log(paras);
var input = document.querySelector("input");
// console.log(document.querySelector("div").innerText);

function handleAlert() {
  alert("Hello from " + input.value);
}
var btn = document.querySelector(".submit");

btn.addEventListener("click", function () {
  alert("Hello from " + input.value);
});

var btnsPlus = Array.from(document.querySelectorAll(".btn-plus"));
var btnsMinus = document.querySelectorAll(".btn-minus");
var quantities = document.querySelectorAll(".quantity");

// btnPlus.addEventListener("click", function () {
//     quantity.innerText = Number(quantity.innerText) + 1;
//   quantity.innerText++;
// });

// btnMinus.addEventListener("click", function () {

//   if (quantity.innerText > 0) {
//     quantity.innerText--;
//   }
// });
for (let i in btnsPlus) {
  btnsPlus[i].addEventListener("click", function () {
    //   quantity.innerText = Number(quantity.innerText) + 1;
    quantities[i].innerText++;
  });
  btnsMinus[i].addEventListener("click", function () {
    if (quantities[i].innerText > 0) {
      quantities[i].innerText--;
    }
  });
}
