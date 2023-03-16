const menu = document.querySelector("nav i");
const navUl = document.querySelector("nav ul");
menu.onclick = () => {
  // this is commnet
  if (menu.classList.contains("bx-menu")) {
    menu.classList.remove("bx-menu");
    menu.classList.add("bx-x");
    navUl.classList.add("active");
  } else {
    menu.classList.remove("bx-x");
    navUl.classList.remove("active");
    menu.classList.add("bx-menu");
  }
};
