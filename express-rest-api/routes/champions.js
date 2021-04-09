const controllers = require('../controllers');
const router = require('express').Router();
const { auth } = require('../utils');

router.get('/', controllers.champions.get);

router.get('/getAll', controllers.champions.getAll);


router.get('/details', controllers.champions.getOne);


router.post('/', auth(), controllers.champions.post);

router.put('/:id', auth(), controllers.champions.put);

router.delete('/:id', auth(), controllers.champions.delete);

module.exports = router;