const { verifyToken } = require('../utils/jwt');

const authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]; // Extrae el token del encabezado
  if (!token) {
    return res.status(401).json({ message: 'Token requerido' });
  }

  try {
    const decoded = verifyToken(token); // Verifica el token
    req.user = decoded; // Añade los datos del usuario al objeto req
    next(); // Continúa al siguiente middleware o controlador
  } catch (err) {
    res.status(401).json({ message: 'Token inválido o expirado' });
  }
};

module.exports = authenticate;
