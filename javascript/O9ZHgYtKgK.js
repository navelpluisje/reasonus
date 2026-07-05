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
(function smoothScroll() {
  const menuItems = document.querySelectorAll(".menu .sub a.intern");

  function handleAnchorClick(event) {
    const rootFontSize = parseFloat(
      window.getComputedStyle(document.body).getPropertyValue("font-size"),
    );
    event.preventDefault();
    const link = event.currentTarget;
    const anchorId = new URL(link.href).hash.replace("#", "");
    const anchor = document.getElementById(anchorId);
    const root = document.querySelector(".page-content");

    if (!root) {
      return;
    }

    root.scrollTo({
      top: (anchor?.offsetTop || 0) - 7.25 * rootFontSize,
      behavior: "smooth",
    });
  }

  for (const menuItem of Array.from(menuItems)) {
    menuItem.addEventListener("click", handleAnchorClick);
  }
})();
(function imagePopout() {
  const images = document.querySelectorAll("img.popout");

  const popoutImage = (event) => {
    const removeEventListeners = () => {
      const element = document.getElementById("image-popout");
      element.removeEventListener("click", handleImageClick);
      document.body.removeEventListener("keydown", handleKeyClick);
    };

    const handleImageClick = () => {
      removeEventListeners();

      document.getElementById("image-container").innerHTML = "";
    };

    const handleKeyClick = (event) => {
      if (event.key === "Escape") {
        removeEventListeners();

        document.getElementById("image-container").innerHTML = "";
      }
    };

    const html = `<section id="image-popout" class="image-popout"><img src="${event.target.src}"<section>`;

    document.getElementById("image-container").innerHTML = html;

    const element = document.getElementById("image-popout");
    element.addEventListener("click", handleImageClick);
    document.body.addEventListener("keydown", handleKeyClick);
  };

  for (const image of Array.from(images)) {
    image.addEventListener("click", popoutImage);
  }
})();
