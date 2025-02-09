import Nunjucks from "nunjucks";

export default function (eleventyConfig) {
  let nunjucksEnvironment = new Nunjucks.Environment(
    new Nunjucks.FileSystemLoader(["src/_includes", "src/_layouts"])
  );
  eleventyConfig.addNunjucksFilter("slug", function (value) {
    return value.toLowerCase().replace(/\s/g, "-");
  });

  eleventyConfig.setLibrary("njk", nunjucksEnvironment);

  eleventyConfig.addBundle("css", {
    toFileDirectory: "styles",
  });

  eleventyConfig.addPassthroughCopy({
    "src/public/": "/",
  });

  return {
    // pathPrefix: "test",
    dir: {
      output: "dist",
      input: "src/content",
      layouts: "../_layouts",
      includes: "../_includes",
      data: "../_data",
    },
  };
}
