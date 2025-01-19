const authenticate = require('./middleware/authenticate');
const express = require('express');
const auth = require('./auth');
const cardService = require('./cardService');
const paymentService = require('./paymentService');
const router = express.Router();

// Autenticación
router.post('/login', auth.login);

// Gestión de tarjetas
router.get('/cards', cardService.getCards);
router.post('/add-card', cardService.addCard);

// Procesar pagos
router.post('/process-payment', paymentService.processPayment);

module.exports = router;
