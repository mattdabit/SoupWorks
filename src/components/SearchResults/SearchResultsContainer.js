import React from "react";
import {connect} from "react-redux";
import SearchResultsComponent from "./SearchResultsComponent";
import searchRecipesApi from "../../api/searchRecipesApi";
import {recipesLoaded} from "./searchResultsActions";

class SearchResultsContainer extends React.Component {
    componentWillMount(){
        searchRecipesApi.getByIngredients().then(this.props.recipesLoaded);
    }

    render(){
        return (
            <SearchResultsComponent recipes={this.props.recipes}/>
        );
    }
}
const mapStateToProps = (state) => ({
   recipes: state.searchResults
});

const actions = {
    recipesLoaded
};

SearchResultsContainer.propTypes = {
    recipes: React.PropTypes.object.isRequired
};

export default connect(mapStateToProps, actions)(SearchResultsContainer);