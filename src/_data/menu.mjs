import qs from "qs";
import "dotenv/config";
import Fetch from "@11ty/eleventy-fetch";

export default async function () {
  const token = process.env.STRAPI_TOKEN;
  let menu_response;

  const query = {
    populate: {
      Menu_Items: {
        sort: ["Order:asc"],
        populate: {
          page: {
            fields: ["Slug", "Type", "Color"],
            populate: {
              Blocks: {
                on: {
                  "block.image-block": {
                    fields: ["Title"],
                  },
                  "block.default-block": {
                    fields: ["Title"],
                  },
                },
              },
            },
          },
        },
      },
    },
  };

  try {
    menu_response = await Fetch(
      `${process.env.STRAPI_URL}/api/menu?${qs.stringify(query, {
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

  // @ts-ignore
  const formattedMenu = (menu_response?.data.Menu_Items || []).map((item) => {
    return {
      Title: item.Title,
      Slug: item.page.Slug,
      Type: item.page.Type,
      Color: item.page.Color,
      SubMenu: item.page.Blocks.map((block) => block.Title),
    };
  });

  return formattedMenu;
}
