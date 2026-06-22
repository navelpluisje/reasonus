(function menu() {
  const menuButton = document.getElementById("menu-button");
  const container = document.querySelector(".center");
  const multiMenuItems = document.querySelectorAll(
    ".multi-menu-item:not(.open)",
  );

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
    container.classList.remove("show-menu");
    container.removeEventListener("click", handleMenuClose);
  };

  const handleMenuItemClick = ({ target }) => {
    if (target.dataset.id) {
      for (const menuItem of Array.from(multiMenuItems)) {
        const element = document.getElementById(menuItem.dataset.id);
        if (element.classList.contains("open")) {
          continue;
        }
        element.classList.remove("active");

        if (target.dataset.id === menuItem.dataset.id) {
          element.classList.add("active");
        }
      }
    }
  };

  menuButton.addEventListener("click", handleMenuButtonClick);

  for (const menuItem of Array.from(multiMenuItems)) {
    menuItem.addEventListener("click", handleMenuItemClick);
  }
})();
