import qs from "qs";
import "dotenv/config";
import Fetch from "@11ty/eleventy-fetch";
import { jsonToDOM } from "../utils/jsonToDOM.mjs";
import { downloadImage } from "../utils/downloadImage.mjs";

const populateImage = {
  fields: ["name", "url", "width", "height"],
};

const renameImage = (image = "") => {
  image && downloadImage(image);

  return image.replace("uploads", "cms_images");
};

export default async function () {
  const token = process.env.STRAPI_TOKEN;
  let home_response;

  const query = {
    fields: [
      "Banner_Title",
      "Banner_Button",
      "Banner_Button_Url",
      "Banner_Content",
    ],
    populate: {
      Highlights: {
        fields: ["Title", "Content", "Color"],
        populate: {
          Image: populateImage,
        },
      },
    },
  };

  try {
    home_response = await Fetch(
      `${STRAPI_URL}/api/home?${qs.stringify(query, {
        encodeValuesOnly: true,
      })}`,
      {
        duration: "1d",
        type: "json",
        fetchOptions: {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      }
    );
  } catch (e) {
    console.error("Error while retreiving Home data", e);
  }

  const formattedHome = {
    Title: home_response?.data.Banner_Title,
    Content: jsonToDOM(home_response?.data.Banner_Content),
    Button: home_response?.data.Banner_Button,
    ButtonUrl: home_response?.data.Banner_Button_Url,
    Highlights: home_response?.data.Highlights.map((highlight) => ({
      Title: highlight.Title,
      Content: jsonToDOM(highlight.Content),
      Color: highlight.Color,
      Image: renameImage(highlight.Image.url),
    })),
  };

  console.log({ formattedHome });

  return formattedHome;
}
