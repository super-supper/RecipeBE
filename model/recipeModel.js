class Recipe {
    constructor(id, title, description, url) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.url = url;
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