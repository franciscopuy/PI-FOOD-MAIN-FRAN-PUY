const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const recipeRouter = require ('./recipeRoutes')
const dietsRouter = require ('./dietsRoutes');



const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/recipe', recipeRouter)
router.use('/diets', dietsRouter)

module.exports = router;
