const { Router } = require('express');
const { getDiets, getDiet, postDiets, putDiets, deleteDiets } = require('../handlers/dietsHandlers');

const dietsRouter = Router()

dietsRouter.get('/', getDiets)
dietsRouter.get('/', getDiet);
dietsRouter.post('/', postDiets);
dietsRouter.put('/', putDiets);
dietsRouter.delete('/', deleteDiets);

module.exports = dietsRouter;