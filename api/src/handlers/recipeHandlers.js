const getAllRecipes = require('../controllers/recipes/getAllRecipes')
const getById = require('../controllers/recipes/getById')
const PostsRecipes = require('../controllers/recipes/PostsRecipes')
 const getRecipes = async (req, res) => {
    const { name } = req.query;
    try {
      const response = await getAllRecipes(name);
      res.status(200).json(response);
    } catch (error) {
      res.status(400).json({ error: error.message, descripcion: 'No se encontraron recetas.' });
    }
  };

const getRecipe = async (req, res) => {
    const { idRecipe } = req.params
    try { 
    //aqui salio todo bien
        const response = await getById(idRecipe)  
        res.status(200).json(response)
    } catch (error) {
        // aqui marca el error
        res.status(400).json({error: error.message, descripcion: 'error en getRecipe'})
    }
}

const postRecipe = async(req, res) => {
    try {
        const response = await PostsRecipes(req.body)
        res.status(200).json(response)
    } catch (error) {
        //aquí está el error
        res.status(400).json({error: error.message, description:"error en postRecipes"})
    }
}

const putRecipe = async(req,res) => {
    try {
        // aquí salió todo bien
        const recipes = {};
        res.status(200).json(recipes)
    } catch (error) {
        //aquí está el error
        res.status(400).json({error: error.message, description:"error en putRecipes"})
    }
}

const deleteRecipe = async(req,res) => {
    try {
        // aquí salió todo bien
        const recipes = {};
        res.status(200).json(recipes)
    } catch (error) {
        //aquí está el error
        res.status(400).json({error: error.message, description:"error en deleteRecipes"})
    }
}


module.exports = {
    getRecipe, getRecipes, postRecipe, putRecipe, deleteRecipe
}