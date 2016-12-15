// "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?fillIngredients=false&ingredients=apples%2Cflour%2Csugar&limitLicense=false&number=5&ranking=1"
import Promise from "promise";

const apiReturn = [
    {
        "id": 641803,
        "title": "Easy & Delish! ~ Apple Crumble",
        "image": "https://spoonacular.com/recipeImages/Easy---Delish--Apple-Crumble-641803.jpg",
        "usedIngredientCount": 3,
        "missedIngredientCount": 4,
        "likes": 1
    },
    {
        "id": 645152,
        "title": "Grandma's Apple Crisp",
        "image": "https://spoonacular.com/recipeImages/Grandmas-Apple-Crisp-645152.jpg",
        "usedIngredientCount": 3,
        "missedIngredientCount": 6,
        "likes": 1
    }
];

const searchRecipesApi = () => ({
    getByIngredients: () => {
        return new Promise.resolve([
            {
                "id": 641803,
                "title": "Easy & Delish! ~ Apple Crumble",
                "image": "https://spoonacular.com/recipeImages/Easy---Delish--Apple-Crumble-641803.jpg",
                "usedIngredientCount": 3,
                "missedIngredientCount": 4,
                "likes": 1
            },
            {
                "id": 645152,
                "title": "Grandma's Apple Crisp",
                "image": "https://spoonacular.com/recipeImages/Grandmas-Apple-Crisp-645152.jpg",
                "usedIngredientCount": 3,
                "missedIngredientCount": 6,
                "likes": 1
            }
        ]);
    }
});

export default new searchRecipesApi;

