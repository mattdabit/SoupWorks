import React from "react";
import {reduxForm, Field} from "redux-form";
import {connect} from "react-redux";
import SearchComponent from "./SearchComponent";

var reduxFormConfig = {
    form: 'search',
};

const SearchContainer = reduxForm(reduxFormConfig)(SearchComponent);
export default connect()(SearchContainer);