const { Recipe } = require('../../db')

module.exports = async (name, image, summary, healthScore, steps) => {
    const newRecipe = await Recipe.create({name, image, summary, healthScore, steps})
    return newRecipe
}