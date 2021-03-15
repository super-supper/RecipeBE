const router = require("express").Router();
const recipeController = require("../controller/recipe");
const tagController = require("../controller/tag");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Super-Supper' });
});

router.get("/recipes", recipeController.getAllRecipes);
router.post("/recipes", recipeController.addRecipe);
router.get("/recipes/:id", recipeController.getRecipeById);
router.delete("/recipes/:id", recipeController.deleteRecipe);

router.get("/tags", tagController.getAllTags);
router.post("/tags", tagController.addTag);
router.delete("/tags/:id", tagController.deleteTag);

router.get("/recipes/tags/:id", recipeController.getRecipesTags);
router.post("/recipes/tags", recipeController.addRecipeTag);
router.delete("/recipes/tags/delete/:id", recipeController.deleteTag);

module.exports = router;
