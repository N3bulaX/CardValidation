// src/api/balanceService.js

const axios = require('axios');

async function getBalance(cardNumber) {
    const apiEndpoint = `https://api.example.com/get-balance/${cardNumber}`;
    try {
        const response = await axios.get(apiEndpoint);
        return response.data; // Devuelve el saldo disponible (crédito y débito)
    } catch (error) {
        console.error('Error al obtener el saldo:', error);
        return null;
    }
}

module.exports = getBalance;
