// src/utils/requestHandler.js

const axios = require('axios');

async function sendRequest(url) {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error('Error en la solicitud HTTP:', error);
        return null;
    }
}

module.exports = sendRequest;
