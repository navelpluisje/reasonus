import { downloadImage } from "./downloadImage.mjs";

export const renameImage = (image = "") => {
  image && downloadImage(image);

  return image.replace("uploads", "cms_images");
};
