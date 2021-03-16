const router = require("express").Router();
const recipeController = require("../controller/recipe");
const tagController = require("../controller/tag");

const { body, check } = require("express-validator");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Super-Supper' });
});

router.get("/recipes", recipeController.getAllRecipes);
router.get("/recipes/:id", recipeController.getRecipeById);
router.delete("/recipes/:id", recipeController.deleteRecipe);
router.post(
    "/recipes",
    body("title").not().isEmpty().trim().stripLow().escape(),
    body("description").not().isEmpty().trim().stripLow().escape(),
    body("url").not().isEmpty().trim().isURL(),
    check("ingredients.*.ingredient").not().isEmpty().trim().stripLow().escape(),
    check("ingredients.*.qty").not().isEmpty().trim().stripLow().escape(),
    check("steps.*.step_num").not().isEmpty().trim().stripLow().escape(),
    check("steps.*.step").not().isEmpty().trim().stripLow().escape(),
    check("tags.*.tag_id").not().isEmpty().trim().stripLow().escape(),
    recipeController.addRecipe);

router.get("/tags", tagController.getAllTags);
router.delete("/tags/:id", tagController.deleteTag);
router.post("/tags", tagController.addTag);

router.get("/recipes/tags/:id", recipeController.getRecipesTags);
router.delete("/recipes/tags/delete/:id", recipeController.deleteTag);
router.post("/recipes/tags", recipeController.addRecipeTag);

module.exports = router;
