const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const SECRET_KEY = process.env.JWT_SECRET || 'default_secret_key';

/**
 * Genera un token JWT con los datos proporcionados.
 * @param {Object} payload - Los datos que se incluirán en el token.
 * @param {String} expiresIn - Tiempo de expiración del token (ej. '1h', '7d').
 * @returns {String} - El token JWT generado.
 */
const generateToken = (payload, expiresIn = '1h') => {
  return jwt.sign(payload, SECRET_KEY, { expiresIn });
};

/**
 * Verifica un token JWT y retorna el contenido decodificado.
 * @param {String} token - El token JWT a verificar.
 * @returns {Object|String} - El contenido decodificado del token si es válido.
 * @throws {Error} - Lanza un error si el token es inválido o ha expirado.
 */
const verifyToken = (token) => {
  try {
    return jwt.verify(token, SECRET_KEY);
  } catch (err) {
    throw new Error('Token inválido o expirado');
  }
};

module.exports = {
  generateToken,
  verifyToken,
};
