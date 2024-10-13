import React from "react";

interface IRecipeTagProps {
  tagName: string;
  onSelectTag: (tagName: string) => void;
}

const RecipeTag: React.FC<IRecipeTagProps> = ({ tagName, onSelectTag }) => {
  return (
    <li onClick={() => onSelectTag(tagName)}>
      <button>{tagName}</button>
    </li>
  );
};

export default RecipeTag;
