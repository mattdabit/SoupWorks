import React from "react";
import {reduxForm} from "redux-form";
import {connect} from "react-redux";
import SearchComponent from "./SearchComponent";
import {browserHistory} from "react-router";
import {saveIngredients} from "./searchActions";

const mapDispatchToProps = (dispatch) => ({
    loadRecipes: (recipes) => {
        dispatch(saveIngredients(recipes));
        browserHistory.push("search")
    }
});

const reduxFormConfig = {
    form: 'search',
};

const SearchContainer = reduxForm(reduxFormConfig)(SearchComponent);
export default connect(null, mapDispatchToProps)(SearchContainer);