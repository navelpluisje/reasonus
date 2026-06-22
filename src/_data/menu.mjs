import qs from "qs";
import "dotenv/config";
import Fetch from "@11ty/eleventy-fetch";

export default async function () {
  const token = process.env.STRAPI_TOKEN;
  const strapiUrl = process.env.STRAPI_URL;
  let menu_response;

  const query = {
    populate: {
      Menu_Items: {
        sort: ["Order:asc"],
        populate: {
          SubMenuItems: {
            fields: ["Title", "Order"],
            populate: {
              page: {
                fields: ["Slug", "Type", "Color"],
              },
            },
          },
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
      `${strapiUrl}/api/menu?${qs.stringify(query, {
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
      },
    );
  } catch (error) {
    console.error("Error while retrieving menu data", error);
  }

  const slugs = {};
  const menu = (menu_response?.data.Menu_Items || []).map((item) => {
    const pageType = item?.SubMenuItems?.length
      ? item.SubMenuItems[0].page.Type
      : item.page.Type;

    const pageSlug = item?.SubMenuItems?.length ? item.Slug : item.page.Slug;

    const subItems = item?.SubMenuItems?.length
      ? item.SubMenuItems.map((subItem) => {
          slugs[subItem.page.documentId] =
            `${item.Type === "Multi Page" ? item.Slug : pageSlug}/${subItem.page.Slug}`;

          return {
            title: subItem.Title,
            slug: `${pageType}/${item.Type === "Multi Page" ? item.Slug : pageSlug}/${subItem.page.Slug}`,
            link: true,
          };
        })
      : item.page.Blocks.map((block) => ({
          title: block.Title,
          slug: `${block.Title}`,
          link: false,
        }));

    if (item.Type !== "Multi Page") {
      slugs[item?.page?.documentId] = item?.page?.Slug;
    }

    return {
      Title: item.Title,
      Slug: `${pageType}/${item.Type === "Multi Page" ? pageSlug : item?.page?.Slug}`,
      MenuType: item.Type,
      Type: item.Type,
      Color: item.Type === "Multi Page" ? item.Color : item?.page?.Color,
      SubMenu: [...subItems],
    };
  });

  return {
    menu,
    slugs,
  };
}
