const pool = require('../db/dbConfig');

exports.processPayment = async (req, res) => {
  const { card_number, amount } = req.body;
  try {
    const [rows] = await pool.query('SELECT * FROM cards WHERE card_number = ?', [card_number]);
    if (rows.length === 0) {
      return res.status(404).json({ message: 'Tarjeta no encontrada' });
    }

    const card = rows[0];
    if (card.balance < amount) {
      return res.status(400).json({ message: 'Saldo insuficiente' });
    }

    const newBalance = card.balance - amount;
    await pool.query('UPDATE cards SET balance = ? WHERE card_number = ?', [newBalance, card_number]);
    res.json({ message: 'Pago procesado con éxito', newBalance });
  } catch (err) {
    res.status(500).json({ message: 'Error al procesar el pago', error: err.message });
  }
};
