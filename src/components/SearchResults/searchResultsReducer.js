import {types} from "./searchResultsActions";
import update from "immutability-helper";

const initialState = {};

const buildMapOfRecipes = (recipes) => (
    recipes.reduce(
        (recipesAsMap, current) => ({...recipesAsMap, [current.id]: current}),
        {}
    )
);

export default  (state = initialState, action) => {
    switch (action.type) {
        case types.RECIPES_LOADED:
            return update(state, {$set: buildMapOfRecipes(action.payload)});
        default:
            return state;
    }
};;