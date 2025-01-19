// src/manualInput/manualCardValidation.js

const axios = require('axios');

async function manualValidateCard(cardNumber) {
    const apiEndpoint = `https://api.example.com/validate-card/${cardNumber}`;
    try {
        const response = await axios.get(apiEndpoint);
        return response.data;  // Devuelve la información sobre la tarjeta
    } catch (error) {
        console.error('Error al validar la tarjeta manualmente:', error);
        return null;
    }
}

module.exports = manualValidateCard;
