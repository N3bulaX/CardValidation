const axios = require('axios');

async function getBalance(cardNumber) {
    const apiEndpoint = `https://api.example.com/get-balance/${cardNumber}`;
    try {
        const response = await axios.get(apiEndpoint);
        return response.data.balance; // Asegúrate de devolver solo el saldo disponible
    } catch (error) {
        console.error('Error al obtener el saldo:', error);
        throw new Error('No se pudo obtener el saldo'); // Lanza un error en lugar de devolver null
    }
}

module.exports = getBalance;