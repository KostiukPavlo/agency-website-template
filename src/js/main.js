import "./_vendor";
import vars from "./_vars";
import "./_functions";
import "./_components";

// progress-bar
const progress_bars = document.querySelectorAll(".progress");

progress_bars.forEach((bar) => {
  setTimeout(() => {
    const { size } = bar.dataset;
    bar.style.width = `${size}%`;
  }, 1000);
});
// progress-bar end

// accordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    panel.classList.toggle("panel-active");
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

// accordion end

// close menu when click link
const menuList = document.querySelectorAll(".menu-item a");
const nav_list = document.querySelector(".nav_list");
const nav_btn = document.querySelector(".nav_btn");

for (i = 0; i < menuList.length; i++) {
  menuList[i].addEventListener("click", function () {
    nav_list.classList.remove("menu--active");
    nav_btn.classList.remove("burger--active");
  });
}
// close menu when click link end
