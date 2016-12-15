export const types = {
  SAVE_INGREDIENTS: "SAVE_INGREDIENTS"
};

export const saveIngredients = (ingredients) => ({
    type: types.SAVE_INGREDIENTS,
    ingredients
});