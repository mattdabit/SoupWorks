import React from "react";
import {Field} from "redux-form";

const SearchComponent = ({handleSubmit, loadRecipes}) =>(
    <div className="home">
        <form onSubmit={handleSubmit(loadRecipes)}>
            <Field name="ingredients" component="input" type="text" placeholder="Enter Ingredients"/>
            <button type="submit">Search</button>
        </form>
    </div>
);

export default SearchComponent;