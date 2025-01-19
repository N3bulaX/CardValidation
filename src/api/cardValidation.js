// src/api/cardValidation.js

const axios = require('axios');

async function validateCard(cardNumber) {
    const apiEndpoint = `https://api.example.com/validate-card/${cardNumber}`;
    try {
        const response = await axios.get(apiEndpoint);
        return response.data; // Devuelve la información sobre la tarjeta (activa o no)
    } catch (error) {
        console.error('Error al validar la tarjeta:', error);
        return null;
    }
}

module.exports = validateCard;

const pool = require('../db/dbConfig');

exports.getCards = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM cards');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ message: 'Error al obtener las tarjetas', error: err.message });
  }
};

exports.addCard = async (req, res) => {
  const { card_number, card_type, balance } = req.body;
  try {
    const [result] = await pool.query(
      'INSERT INTO cards (card_number, card_type, balance) VALUES (?, ?, ?)',
      [card_number, card_type, balance]
    );
    res.status(201).json({ id: result.insertId, message: 'Tarjeta añadida con éxito' });
  } catch (err) {
    res.status(500).json({ message: 'Error al añadir la tarjeta', error: err.message });
  }
};
