import https from "https";
import fs from "fs";
import path from "path";
import "dotenv/config";

function getFileName(path) {
  const parts = path.split("/");
  return parts[parts.length - 1];
}

export const downloadImage = (imagePath) => {
  const imageLocation = path.join(process.cwd(), "src", "public", "cms_images");
  const imageUrl = imagePath.startsWith("https")
    ? imagePath
    : `${process.env.STRAPI_URL}${imagePath}`;
  const imageName = `${imageLocation}/${getFileName(imageUrl)}`;

  if (fs.existsSync(imageName)) {
    return;
  }

  const file = fs.createWriteStream(imageName);

  if (!fs.existsSync(imageLocation)) {
    fs.mkdirSync(imageLocation, { recursive: true });
  }

  https
    .get(imageUrl, (response) => {
      response.pipe(file);

      file.on("finish", () => {
        file.close();
        console.log(`Image downloaded as ${imageName}`);
      });
    })
    .on("error", (err) => {
      fs.unlink(imageName, (e) => {
        console.log({ e });
      });
      console.error(`Error downloading image: ${err.message}`);
    });
};
