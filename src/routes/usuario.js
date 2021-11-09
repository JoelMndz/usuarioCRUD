const {Router} = require('express');
const router = Router();
const usuarioController = require('../controllers/usuario');

router.get('/', usuarioController.getAll);
router.get('/:id', usuarioController.get);
router.post('/', usuarioController.create);
router.patch('/:id', usuarioController.update);
router.delete('/:id', usuarioController.delete);

module.exports = router;