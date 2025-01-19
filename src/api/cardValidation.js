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
