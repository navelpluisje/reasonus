import qs from "qs";
import "dotenv/config";
import Fetch from "@11ty/eleventy-fetch";
import { populateImage } from "../utils/strapiFields.mjs";
import { jsonToDOM } from "../utils/jsonToDOM.mjs";
import { renameImage } from "../utils/renameImage.mjs";
import { formatDate } from "../utils/formatDate.mjs";
import slugify from "@sindresorhus/slugify";

export default async function () {
  const token = process.env.STRAPI_TOKEN;
  const strapiUrl = process.env.STRAPI_URL;
  let posts_response;

  const query = {
    fields: ["Title", "Content", "Tags", "updatedAt"],
    sort: ["publishedAt:desc"],
    populate: {
      Image: populateImage,
    },
  };

  try {
    posts_response = await Fetch(
      `${strapiUrl}/api/posts?${qs.stringify(query, {
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
    console.error("Error while retreiving menu data", e);
  }

  const colors = ["blue", "green", "red", "grey", "yellow"];

  // @ts-ignore
  const formattedPosts = (posts_response?.data || []).map((item, index) => {
    return {
      Url: `/posts/${slugify(item.Title, { decamelize: false })}`,
      Title: item.Title,
      Color: colors[index % 5],
      Content: jsonToDOM(item.Content),
      Image: renameImage(item.Image?.url),
      PublishedAt: formatDate(item.updatedAt),
      PublishedDate: item.updatedAt,
      tags: item.Tags.split(","),
    };
  });

  return formattedPosts;
}
