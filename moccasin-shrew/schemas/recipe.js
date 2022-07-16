export default {
  name: "recipe",
  type: "document",
  title: "Recipe",
  fields: [
    {
      name: "recipe_title",
      type: "string",
      title: "Recipe Title",
      description: "Name your recipe",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "Generate slug for the links",
      options: {
        source: "recipe_title",
        maxLength: 96,
      },
    },
    {
      name: "recipe_description",
      type: "text",
      title: "Recipe Description",
      description: "Short description for the recipe",
    },
    {
      name: "instructions",
      title: "Instructions",
      description: "Write the cooking instructions here",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "mainImage",
      title: "Recipe Main Image",
      description: "Add image from your recipe",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "caption",
          type: "string",
          title: "Image Caption",
          options: {
            isHighlighted: true,
          },
        },
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
          description: "Important for SEO and accessibility",
          options: {
            isHighlighted: true,
          },
        },
      ],
    },
    {
      name: "ingredients",
      title: "Ingredients",
      description: "Add the recipe ingredients",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              title: "Ingredient",
              name: "ingredient",
              type: "reference",
              to: [{ type: "ingredient" }],
            },
            {
              name: "wholeNumber",
              title: "Whole Numbers",
              type: "number",
            },
            {
              name: "fraction",
              title: "Fraction Amount",
              type: "string",
              options: {
                list: ["1/2", "1/3", "1/4", "3/4", "2/3"],
              },
            },
            {
              name: "unit",
              title: "Unit",
              type: "string",
              options: {
                list: ["grams", "cup", "Tbsp.", "tsp.", "millilitres"],
              },
            },
          ],
          preview: {
            select: {
              title: "ingredient.name",
              name: "ingredient.name",
              media: "ingredient.image",
              fraction: "fraction",
              unit: "unit",
            },
          },
        },
      ],
    },
  ],
};
