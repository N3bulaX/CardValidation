app.get('/cards', async (req, res) => {
    try {
        // Lógica para listar tarjetas desde la base de datos.
        // Supongamos que hay una función getCards que obtiene las tarjetas de la base de datos.
        const cards = await getCards();
        res.status(200).send(cards);
    } catch (error) {
        res.status(500).send({ message: 'Error al obtener las tarjetas', error: error.message });
    }
});