const components = {
  blocks: {
    paragraph: (value) => `<p>${value}</p>`,
    quote: (value) => `<blockquote>${value}</blockquote>`,
    code: (value) =>
      `<pre>
        <code>${value}</code>
      </pre>`,
    heading: (value, { level }) => `<h${level}>${value}</h${level}>`,
    link: (value, { url }) => {
      console.log(url);
      if (url.startsWith("http")) {
        return `<a href=${url} target="_blank" rel="noreferrer noopener">${value}</a>`;
      } else {
        return `<a href=${url}>${value}</a>`;
      }
    },
    list: (value, { format }) => {
      if (format === "ordered") {
        return `<ol>${value}</ol>`;
      }

      return `<ul>${value}</ul>`;
    },
    "list-item": (value) => `<li>${value}</li>`,
    image: (image) =>
      `<img
        src="${image.url}"
        alt="${image.alternativeText || undefined}"
      />`,
  },
  modifiers: {
    bold: (value) => `<strong>${value}</strong>`,
    italic: (value) => `<em>${value}</em>`,
    underline: (value) => `<u>${value}</u>`,
    strikethrough: (value) => `<del>${value}</del>`,
    code: (value) => `<code>${value}</code>`,
  },
  missingBlockTypes: [],
  missingModifierTypes: [],
};

const getModifiers = (val) => {
  const res = [];
  if (val.bold) {
    res.push("bold");
  }
  if (val.italic) {
    res.push("italic");
  }
  if (val.underline) {
    res.push("underline");
  }
  if (val.strikethrough) {
    res.push("strikethrough");
  }
  if (val.code) {
    res.push("code");
  }
  return res;
};

export function jsonToDOM(blocks = []) {
  let result = "";

  for (const block of blocks) {
    const { type, children, ...rest } = block;

    if (children) {
      result += components.blocks?.[type](jsonToDOM(children), rest);
    } else {
      const mods = getModifiers(block);
      result += mods.reduce((acc, m) => {
        return components.modifiers[m](acc);
      }, block.text);
    }
  }

  return result;
}
