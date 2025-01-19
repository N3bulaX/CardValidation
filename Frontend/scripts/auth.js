app.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        // Lógica para autenticar al usuario.
        // Supongamos que hay una función authenticateUser que autentica al usuario.
        const user = await authenticateUser(username, password);
        if (user) {
            res.status(200).send({ message: 'Autenticación exitosa', user });
        } else {
            res.status(401).send({ message: 'Credenciales incorrectas' });
        }
    } catch (error) {
        res.status(500).send({ message: 'Error al autenticar al usuario', error: error.message });
    }
});