/* El loader solo se mostrará 1 segundo luego desaparecerá */

window.onload = function () {
  setTimeout(function () {
    var animations = document.getElementsByClassName("loader");
    for (var i = 0; i < animations.length; i++) {
      animations[i].style.display = "none";
    }
  }, 1000);
};
