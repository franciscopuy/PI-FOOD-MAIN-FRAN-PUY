const { Router } = require('express')
const {  getRecipe, getRecipes, postRecipe, putRecipe, deleteRecipe } = require('../handlers/recipeHandlers')

const recipeRouter = Router()

recipeRouter.get('/', getRecipes)
recipeRouter.get('/:idRecipe', getRecipe)
recipeRouter.put('/:id', putRecipe)
recipeRouter.post('/', postRecipe)
recipeRouter.delete('/', deleteRecipe)
module.exports = recipeRouter;