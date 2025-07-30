(function smoothScroll() {
  const menuItems = document.querySelectorAll(".menu .sub a");
  function handleAnchorClick(event) {
    const rootFontSize = parseFloat(
      window.getComputedStyle(document.body).getPropertyValue("font-size")
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