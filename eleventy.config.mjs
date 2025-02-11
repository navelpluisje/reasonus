import Nunjucks from "nunjucks";

export default function (eleventyConfig) {
  const pathPrefix = process.env.NODE_ENV === "production" ? "reasonus" : "";

  let nunjucksEnvironment = new Nunjucks.Environment(
    new Nunjucks.FileSystemLoader(["src/_includes", "src/_layouts"])
  );

  eleventyConfig.addNunjucksFilter("slug", function (value) {
    return value.toLowerCase().replace(/\s/g, "-");
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
      (content) => {
        if (!pathPrefix) {
          return content;
        }

        const result = content.replace(/url\('\//g, `url('/${pathPrefix}/`);
        return result;
      },
    ],
  });

  eleventyConfig.addPassthroughCopy({
    "src/public/": "/",
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
