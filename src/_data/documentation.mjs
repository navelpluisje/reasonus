import qs from "qs";
import "dotenv/config";
import { jsonToDOM } from "../utils/jsonToDOM.mjs";
import Fetch from "@11ty/eleventy-fetch";
import { downloadImage } from "../utils/downloadImage.mjs";

const populateImage = {
  fields: ["name", "url", "width", "height"],
};

const populateExplanation = {
  fields: ["Title"],
  populate: {
    Content: {
      fields: ["Content"],
      populate: {
        Image: populateImage,
      },
    },
  },
};

const populateTabs = {
  fields: ["Title", "Content"],
  populate: {
    Explanations: populateExplanation,
  },
};

const renameImage = (image = "") => {
  image && downloadImage(image);

  return image.replace("uploads", "cms_images");
};

export default async function () {
  const token = process.env.STRAPI_TOKEN;
  let documentation_response;

  const query = {
    fields: ["Title", "Slug", "Color", "Type"],
    populate: {
      Blocks: {
        on: {
          "block.image-block": {
            fields: ["Title", "Content"],
            populate: {
              Image: populateImage,
              Explanations: populateExplanation,
              Tabs: populateTabs,
            },
          },
          "block.default-block": {
            fields: ["Title", "Content"],
            populate: {
              Explanations: populateExplanation,
              Tabs: populateTabs,
            },
          },
        },
      },
    },
  };

  // console.log(
  //   qs.stringify(query, {
  //     encodeValuesOnly: true,
  //   })
  // );
  try {
    documentation_response = await Fetch(
      `${STRAPI_URL}/api/pages?${qs.stringify(query, {
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

    // documentation_response = await response.json();
  } catch (e) {
    console.error("Error while retreiving menu data", e);
  }

  // @ts-ignore
  const formattedDocumentation = (documentation_response?.data || []).map(
    (item) => ({
      Title: item.Title,
      Slug: item.Slug,
      Type: item.Type,
      Color: item.Color,
      Blocks: item.Blocks.map((block) => {
        return {
          Type: block.__component.split(".")[1],
          Title: block.Title,
          Image: renameImage(block.Image?.url),
          AltText: block.Image?.alternativeText,
          Content: jsonToDOM(block.Content),
          Tabs: block.Tabs.map((tab) => ({
            Title: tab.Title,
            Content: jsonToDOM(tab.Content),
            Explanations: tab.Explanations.map((explanation) => ({
              Title: explanation.Title,
              Content: explanation.Content.map((content) => ({
                Content: jsonToDOM(content.Content),
                Image: renameImage(content.Image?.url),
              })),
            })),
          })),
          Explanations: block.Explanations.map((explanation) => ({
            Title: explanation.Title,
            Content: explanation.Content.map((content) => ({
              Content: jsonToDOM(content.Content),
              Image: renameImage(content.Image?.url),
            })),
          })),
        };
      }),
    })
  );

  return formattedDocumentation;
}
