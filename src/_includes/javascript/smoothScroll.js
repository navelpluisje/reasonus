(function smoothScroll() {
  const menuItems = document.querySelectorAll(".menu .sub a.intern");

  function handleAnchorClick(event) {
    console.log({ event });
    const rootFontSize = parseFloat(
      window.getComputedStyle(document.body).getPropertyValue("font-size"),
    );
    const currentActiveItems = document.querySelectorAll("li.sub.active");
    for (const element of currentActiveItems) {
      element.classList.remove("active");
    }

    event.preventDefault();
    const link = event.currentTarget;
    const anchorId = new URL(link.href).hash.replace("#", "");
    const anchor = document.getElementById(anchorId);
    const root = document.querySelector(".page-content");
    const linkParent = link.parentElement;
    linkParent.classList.add("active");
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
