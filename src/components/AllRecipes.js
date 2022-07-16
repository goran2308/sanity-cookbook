import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client";
import "./allRecipes.css";

export default function AllRecipes() {
  const [allRecipesData, setAllRecipes] = useState(null);

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
      .then((data) => setAllRecipes(data))
      .catch(console.error);
  }, []);

  return (
    <div>
      <h2>All Recipes</h2>
      <div className="recipeCard">
        {allRecipesData &&
          allRecipesData.map((recipe, index) => (
            <Link to={"/" + recipe.slug.current} key={recipe.slug.current}>
              <span key={index}>
                <span>
                  <h2>{recipe.recipe_title}</h2>
                </span>
                <img
                  src={recipe.mainImage.asset.url}
                  alt={recipe.mainImage.alt}
                />
              </span>
            </Link>
          ))}
      </div>
    </div>
  );
}
