/* El loader solo se mostrará 1 segundo luego desaparecerá */

window.onload = function () {
  setTimeout(function () {
    let animations = document.getElementsByClassName("loader");
    for (let i = 0; i < animations.length; i++) {
      animations[i].style.display = "none";
    }
  }, 1000);
};
