(function menu() {
  const menuButton = document.getElementById("menu-button");
  const container = document.querySelector(".center");

  const handleMenuButtonClick = (event) => {
    if (container.classList.contains("show-menu")) {
      container.classList.remove("show-menu");
    } else {
      container.classList.add("show-menu");
      setTimeout(() => {
        container.addEventListener("click", handleMenuClose);
      }, 500);
    }
  };

  const handleMenuClose = (event) => {
    console.log(event);
    console.log("handleMenuClose");
    container.classList.remove("show-menu");
    container.removeEventListener("click", handleMenuClose);
  };

  menuButton.addEventListener("click", handleMenuButtonClick);
})();
