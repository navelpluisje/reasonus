(function smoothScroll() {
  const menuItems = document.querySelectorAll(".menu .sub a");
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
(function tabs() {
  const tabs = document.querySelectorAll(".tab-bar button");
  const tabContents = document.querySelectorAll(".tab-content .tab");
  tabs[0].classList.add("selected");
  tabContents[0].classList.add("selected");

  function handleTabClick(event) {
    const id = event.target.dataset.id;
    for (const tab of Array.from(tabs)) {
      if (tab.dataset.id !== id) {
        tab.classList.remove("selected");
      } else {
        tab.classList.add("selected");
      }
    }
    for (const tabContent of Array.from(tabContents)) {
      if (tabContent.dataset.id !== id) {
        tabContent.classList.remove("selected");
      } else {
        tabContent.classList.add("selected");
      }
    }
  }
  for (const tab of Array.from(tabs)) {
    tab.addEventListener("click", handleTabClick);
  }
})();
