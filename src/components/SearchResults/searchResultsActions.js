export const types = {
    RECIPES_LOADED: "RECIPES_LOADED"
};

export const recipesLoaded = (json) => ({
    type: types.RECIPES_LOADED,
    payload: json
});