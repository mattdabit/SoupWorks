import React from "react";
import {reduxForm, Field} from "redux-form";
import {connect} from "react-redux";
const  { DOM: { input } } = React;

const IndexPage = ({handleSubmit}) =>(
    <div className="home">
        <h1>SoupWorks</h1>
        <form onSubmit={handleSubmit}>
            <Field name="ingredients" component="input" type="text" placeholder="Enter Ingredients"/>
            <button type="submit" >Submit</button>
        </form>
    </div>
);

var reduxFormConfig = {
    form: 'search',
    fields: [
        "ingredients"
    ]
};

const IndexPageContainer = reduxForm(reduxFormConfig)(IndexPage);
export default connect()(IndexPageContainer);
