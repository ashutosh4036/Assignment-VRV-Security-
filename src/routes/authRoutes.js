
const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');
const { authenticate, authorize } = require('../middlewares/authorize');

router.post('/register', register);
router.post('/login', login);

router.get('/admin', authenticate, authorize(['Admin']), (req, res) => {
  res.send('Admin access granted.');
});

router.get('/user', authenticate, authorize(['User', 'Admin', 'Moderator']), (req, res) => {
  res.send('User access granted.');
});

module.exports = router;
