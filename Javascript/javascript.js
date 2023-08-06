//Selector for nav bar
let nav_header = document.querySelector(".nav_header");
let navigation_menu = document.querySelector(".navigation_menu");

navigation_menu.addEventListener("click", function () {
  nav_header.classlist.toggle("menu-open");
});
