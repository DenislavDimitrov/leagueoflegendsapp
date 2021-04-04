const controllers = require('../controllers/');
const router = require('express').Router();

router.get('/', controllers.user.get.profile);

router.post('/register', controllers.user.post.register);

router.post('/login', controllers.user.post.login);
router.get('/verify', controllers.user.get.verifyLogin);

router.post('/logout', controllers.user.post.logout);

router.put('/:id', controllers.user.put);

router.delete('/:id', controllers.user.delete);

module.exports = router;