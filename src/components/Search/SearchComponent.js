import React from "react";
import {Field} from "redux-form";

const SearchComponent = ({handleSubmit}) =>(
    <div className="home">
        <form onSubmit={handleSubmit}>
            <Field name="ingredients" component="input" type="text" placeholder="Enter Ingredients"/>
            <button type="submit" >Submit</button>
        </form>
    </div>
);

export default SearchComponent;