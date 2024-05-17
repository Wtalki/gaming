function myFunction() {
  var x = document.getElementById("slideNav");
  let y = document.getElementById("slide");
  if (x.classList.contains("responsive")) {
    x.classList.remove("responsive");
  } else {
    x.classList.add("responsive");
  }
  if (y.classList.contains("responsive")) {
    y.classList.remove("responsive");
  } else {
    y.classList.add("responsive");
  }
}

const slider = document.querySelector(".slider");
function activate(e) {
  const items = document.querySelectorAll(".item");
  e.target.matches(".next") && slider.append(items[0]);
  //e.currentTarget.matches(".prev") && slider.prepend(items[items.length - 1]);
}
document.addEventListener("click", activate, false);

let prev = document.querySelector(".prev");
prev.addEventListener("click", function () {
  let items = document.querySelectorAll(".item");
  slider.prepend(items[items.length - 1]);
});
