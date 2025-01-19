const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const pool = require('../db/dbConfig');

exports.login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const [rows] = await pool.query('SELECT * FROM users WHERE username = ?', [username]);
    if (rows.length === 0) {
      return res.status(401).json({ message: 'Usuario no encontrado' });
    }

    const user = rows[0];
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(401).json({ message: 'Contraseña incorrecta' });
    }

    const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ message: 'Error en el servidor', error: err.message });
  }
};
const express = require('express');
const auth = require('./auth');
const cardService = require('./cardService');
const paymentService = require('./paymentService');
const authenticate = require('./middleware/authenticate');
const router = express.Router();

// Rutas públicas (sin autenticación)
router.post('/login', auth.login);

// Rutas protegidas (requieren autenticación)
router.get('/cards', authenticate, cardService.getCards);
router.post('/add-card', authenticate, cardService.addCard);
router.post('/process-payment', authenticate, paymentService.processPayment);

module.exports = router;
