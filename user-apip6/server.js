const express = require('express');
const fs = require('fs');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {

    fs.readFile('index.html', 'utf8', (err, data) => {

        if (err) {
            return res
                .status(404)
                .send('404 - Archivo index.html no encontrado');
        }

        res.status(200).send(data);
    });

});

app.listen(PORT, () => {
    console.log(`Servidor activo en http://localhost:${PORT}`);
});