let inputs = document.getElementById("inp");
let text = document.querySelector(".text");

function Add() {
  if (inputs.value == "") {
    alert("Please Enter Task");
  } else if (inputs.value.length < 3) {
    alert("Task should atleast more than 3 character");
  }

  //  else if (inputs.value.typeof === Number) {
  //   alert("please enter valid task");
  else {
    let newEle = document.createElement("ul");
    newEle.innerHTML = `${inputs.value} <i class="fa-solid fa-trash"></i>`;
    text.appendChild(newEle);
    inputs.value = "";
    newEle.querySelector("i").addEventListener("click", remove);
    function remove() {
      newEle.remove();
    }
  }
}
