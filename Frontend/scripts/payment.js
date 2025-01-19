app.post('/process-payment', async (req, res) => {
    try {
        const { cardNumber, amount } = req.body;
        // Lógica para validar el pago.
        // Supongamos que hay una función validatePayment que valida el pago.
        const isValid = await validatePayment(cardNumber, amount);
        if (isValid) {
            res.status(200).send({ message: 'Pago procesado exitosamente' });
        } else {
            res.status(400).send({ message: 'Pago no válido' });
        }
    } catch (error) {
        res.status(500).send({ message: 'Error al procesar el pago', error: error.message });
    }
});