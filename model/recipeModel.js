class Recipe {
    constructor(id, title, description, url, imgUrl, totalTime, prepTime, cookTime, yields, feeds) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.url = url;
        this.img_url = imgUrl;
        this.total_time = totalTime;
        this.prep_time = prepTime;
        this.cook_time = cookTime;
        this.yields = yields;
        this.feeds = feeds;
        this.ingredients = [];
        this.steps = [];
        this.tags = [];
    }

    addIngredient(ingredient) {
        this.ingredients.push(ingredient);
    }

    addStep(step) {
        this.steps.push(step);
    }

    addTag(tag) {
        this.tags.push(tag);
    }
}

module.exports = Recipe;