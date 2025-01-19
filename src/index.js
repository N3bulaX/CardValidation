// src/index.js
const manualValidateCard = require('./manualInput/manualCardValidation');
const separateCards = require('./manualInput/cardDataSeparator');
const separateFunctionalAndNonFunctional = require('./manualInput/functionalStatus');
const mysql = require('./db/dbConfig');

// Función para leer los datos de la base de datos desde Heroku o AWS
const fetchCardDataFromDB = () => {
    return new Promise((resolve, reject) => {
        mysql.query('SELECT card_number, card_type, card_status FROM cards', (error, results) => {
            if (error) {
                console.error('Error al obtener los datos de la base de datos:', error);
                return reject(error);
            }
            resolve(results);
        });
    });
};

// Función principal para manejar los datos
(async () => {
    try {
        const cardData = await fetchCardDataFromDB();

        if (cardData.length > 0) {
            // Separar tarjetas por tipo (débito/crédito)
            const separatedCards = separateCards(cardData);
            console.log('Tarjetas de Débito:', separatedCards.debitCards);
            console.log('Tarjetas de Crédito:', separatedCards.creditCards);

            // Determinar funcionalidad de las tarjetas
            const separatedFunctionalStatus = separateFunctionalAndNonFunctional(cardData);
            console.log('Tarjetas Funcionales:', separatedFunctionalStatus.functionalCards);
            console.log('Tarjetas No Funcionales:', separatedFunctionalStatus.nonFunctionalCards);
        } else {
            console.log('No se obtuvieron datos de la tarjeta.');
        }
    } catch (error) {
        console.error('Error inesperado:', error);
    }
})();

const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const routes = require('./api/routes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Rutas
app.use('/api', routes);

// Servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
