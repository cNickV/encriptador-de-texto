/* Loader, muestra una carga 1 segundo */

window.onload = function () {
  setTimeout(function () {
    let animations = document.getElementsByClassName("loader");
    for (let i = 0; i < animations.length; i++) {
      animations[i].style.display = "none";
    }
  }, 1000);
};

/* Funcionalidad de botón y textarea  */

/* Right */
const textareaRight = document.querySelector(".right__section--textarea");
const alertTitle = document.querySelector(".right__alert--title");
const alertText = document.querySelector(".right__alert--text");
const copyBtn = document.querySelector(".right__btn");

/* Left */
const textareaLeft = document.querySelector(".main__section__textarea2");
const sendButton = document.querySelector(".btn-encriptar");
const encriptar = document.querySelector(".btn-encriptar");
const desEncriptar = document.querySelector(".btn-desencriptar");

/* Limpia el textarea Right */

document.addEventListener("DOMContentLoaded", function () {
  textareaRight.value = "";
  textareaLeft.value = "";
});

let showAlert = true;

function checkRightLeft() {
  if (textareaRight.value !== "" && textareaLeft.value.length === 0 && showAlert) {
    alertTitle.classList.toggle("right__alert--show");
    alertText.classList.toggle("right__alert--show");
    showAlert = false;
  } else if (textareaRight.value === "" && textareaLeft.value.length !== 0) {
    alertTitle.classList.remove("right__alert--show");
    alertText.classList.remove("right__alert--show");
    showAlert = true;
  }
}

setInterval(checkRightLeft, 100);

/* funcionalidad Copy*/

copyBtn.addEventListener("click", () => {
  if (textareaRight.value !== "" && textareaLeft.value.length === 0) {
    textareaRight.select();
    navigator.clipboard.writeText(textareaRight.value);
  }
});

textareaRight.addEventListener("keydown", (event) => {
  if (event.ctrlKey && event.code === "KeyC") {
    textareaRight.select();
    navigator.clipboard.writeText(textareaRight.value);
  }
});

/* funcionalidad encriptar */

encriptar.addEventListener("click", () => {
  textareaRight.value = textareaLeft.value;
  textareaLeft.value = "";
  showText();
});

/* funcionalidad desencriptar */

desEncriptar.addEventListener("click", () => {
  textareaRight.value = textareaLeft.value;
  textareaLeft.value = "";
  showText();
});
