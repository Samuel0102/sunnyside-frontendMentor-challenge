function showMenu() {
  let menuHidden = document.getElementById("header-nav-menu");

  if (menuHidden.style.display === "flex") {
    menuHidden.style.display = "none";
  } else {
    menuHidden.style.display = "flex";
  }
}
