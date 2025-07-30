export const populateImage = {
  fields: ["name", "url", "width", "height"],
};

export const populateExplanation = {
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

export const populateTabs = {
  fields: ["Title", "Content"],
  populate: {
    Explanations: populateExplanation,
  },
};
