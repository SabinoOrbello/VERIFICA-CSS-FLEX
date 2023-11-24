window.addEventListener("scroll", function () {
  var nav = document.querySelector(".navbar");
  var butt = document.querySelector(".started");
  var scrolled = window.scrollY;

  if (scrolled > 450) {
    nav.classList.add("scrolled");
    butt.classList.add("greenButton");
  } else {
    nav.classList.remove("scrolled");
    butt.classList.remove("greenButton");
  }
});
