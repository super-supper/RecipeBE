const router = require("express").Router();
const recipeController = require("../controller/recipe");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/recipes", recipeController.getAllRecipes);
router.post("/recipes", recipeController.addRecipe);
router.get("/recipes/:id", recipeController.getRecipeById);
router.delete("/recipes/:id", recipeController.deleteRecipe);

module.exports = router;
