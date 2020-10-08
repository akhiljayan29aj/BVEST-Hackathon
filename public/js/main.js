// FAQS
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      content.style.padding = 0;
      content.style.opacity = 0;
    } else {
      content.style.maxHeight = content.scrollHeight + "20" + "px";
      content.style.padding = "20px";
      content.style.opacity = 1;
    }
  });
}

// MENU TOGGLE

const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".nav-menu");

menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});
