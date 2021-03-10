const router = require("express").Router();
const recipeController = require("../controller/recipe");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/recipes", recipeController.getAllRecipes);
router.post("/recipes", recipeController.addRecipe);

module.exports = router;
