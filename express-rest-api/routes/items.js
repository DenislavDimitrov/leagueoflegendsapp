const controllers = require('../controllers');
const router = require('express').Router();
const { auth } = require('../utils');

router.post('/', auth(), controllers.items.post);

router.delete('/:id', auth(), controllers.items.delete);

module.exports = router;