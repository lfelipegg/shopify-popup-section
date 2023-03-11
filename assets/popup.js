var modalCustom = document.getElementById("modalCustom");
var spanCustom = document.getElementsByClassName("custom_close")[0];
spanCustom.onclick = function () {
  modalCustom.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modalCustom) {
    modalCustom.style.display = "none";
  }
};
