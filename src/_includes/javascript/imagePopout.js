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
