app.post('/add-card', async (req, res) => {
    try {
        const { cardNumber, cardType, cardBalance } = req.body;
        // Lógica para guardar la tarjeta.
        // Supongamos que hay una función saveCard que guarda la tarjeta en la base de datos.
        await saveCard({ cardNumber, cardType, cardBalance });
        res.status(200).send({ message: 'Tarjeta guardada exitosamente' });
    } catch (error) {
        res.status(500).send({ message: 'Error al guardar la tarjeta', error: error.message });
    }
});