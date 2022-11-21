let num1 = document.getElementById("one");
let num2 = document.getElementById("two");
let btn = document.querySelector(".btn");
let result = document.querySelector(".result");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  result.innerHTML = +num1.value + +num2.value;
  console.log(+num1.value + +num2.value);
  num1.value = ``;
  num2.value = ``;
});
