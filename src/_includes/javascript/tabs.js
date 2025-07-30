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
