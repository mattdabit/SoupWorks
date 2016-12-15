import {types} from "./searchActions";
import update from "immutability-helper";
const initialState = {};

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SAVE_INGREDIENTS:
            return update(state, {$set: action.ingredients});
        default:
            return state;
    }
};

export default searchReducer;