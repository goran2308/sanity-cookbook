import React, { useEffect, useState } from "react";
import sanityClient from "../client";

export default function Recipe() {
  const [, /*recipeData*/ setRecipe] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "recipe"]{
        recipe_title,
        slug,
        mainImage{
          alt,
          asset->{
          _id,
          url
        }
      }
    }`
      )
      .then((data) => setRecipe(data))
      .catch(console.error);
  }, []);

  return (
    <div>
      <h2>Hello</h2>
      <div className="recipeMethod">
        <h3>Title</h3>
      </div>
    </div>
  );
}
