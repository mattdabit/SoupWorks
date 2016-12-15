import React from "react";

const SearchResultsComponent = ({recipes}) => {
    const renderRecipes = Object.keys(recipes).map((recipeId) => (
        <div key={recipeId} className="recipe">
            <span id="title">{recipes[recipeId].title}</span>
            <img id="image" src={recipes[recipeId].image} />
        </div>
    ));

    return (
        <div className="results">
            Results!
            {renderRecipes}
        </div>
    );
};

export default SearchResultsComponent;