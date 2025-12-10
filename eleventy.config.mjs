import Nunjucks from "nunjucks";
import pluginRss from "@11ty/eleventy-plugin-rss";
import nested from "postcss-nested";
import * as postcss from "postcss";
import * as prettier from "prettier";
import { transform } from "nested-css-to-flat";

export default function (eleventyConfig) {
  const pathPrefix = process.env.NODE_ENV === "production" ? "reasonus" : "xx";

  let nunjucksEnvironment = new Nunjucks.Environment(
    new Nunjucks.FileSystemLoader(["src/_includes", "src/_layouts"])
  );

  eleventyConfig.addNunjucksFilter("dateToRfc3339", pluginRss.dateToRfc3339);
  eleventyConfig.addPlugin(pluginRss);

  eleventyConfig.addNunjucksFilter("slug", function (value = "") {
    return value.toLowerCase().replace(/\s/g, "-");
  });

  eleventyConfig.addNunjucksFilter("strip", function (value, length = 200) {
    const val = value.replace(/<[\/a-z0-9]*>/g, " ");
    return val.substring(0, length) + "...";
  });

  eleventyConfig.addNunjucksFilter("first", function (value, length = 3) {
    return value.slice(0, length);
  });

  eleventyConfig.addNunjucksFilter("pathPrefix", function (value) {
    if (!pathPrefix) {
      return value;
    }
    return value
      .replace(/src="\//g, `src="/${pathPrefix}/`)
      .replace(/href="\//g, `href="/${pathPrefix}/`);
  });

  eleventyConfig.setLibrary("njk", nunjucksEnvironment);

  eleventyConfig.addBundle("css", {
    toFileDirectory: `styles`,
    transforms: [
      // Add the pathPrefix to all css urls is the current url starts with a slash
      async (content) => {
        let result = content;
        if (pathPrefix) {
          result = content.replace(/url\('\//g, `url('/${pathPrefix}/`);
        }

        const formattedContent = await prettier.format(result || "", {
          parser: "css",
        });

        // const y = transform(formattedContent);
        // console.log({ y });

        return transform(formattedContent);
      },
    ],
  });

  eleventyConfig.addBundle("js", {
    toFileDirectory: `javascript`,
    transforms: [
      async (content) =>
        await prettier.format(content || "", {
          parser: "babel",
          format: true,
        }),
    ],
  });

  eleventyConfig.addPassthroughCopy({
    "src/public/": "/",
  });

  eleventyConfig.addTransform("format-output", async function (content) {
    if (!content || typeof this.page === "string") {
      return content;
    }

    let parsed = false;
    const parseTypes = ["css", "js", "html", "xml"];
    const parsers = ["css", "babel", "html", "html"];

    for (const type in parseTypes) {
      if ((this.page.outputPath || "").endsWith(parseTypes[type])) {
        const formattedContent = await prettier.format(content || "", {
          parser: parsers[type],
          format: true,
          printWidth: 120,
        });
        parsed = true;
        return formattedContent;
      }
    }

    if (!parsed) {
      return content;
    }
  });

  return {
    pathPrefix,
    dir: {
      output: "dist",
      input: "src/content",
      layouts: "../_layouts",
      includes: "../_includes",
      data: "../_data",
    },
  };
}
