import { downloadImage } from "./downloadImage.mjs";

export const renameImage = (image = "") => {
  if (image === "") {
    return null;
  }

  image && downloadImage(image);
  const imageName = image.split("/").pop();

  return `/cms_images/${imageName}`;
};
