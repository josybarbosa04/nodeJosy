const express = require ('express');

const app = express();

app.get("/", (req, res) => {
    res.send("Josenilda Josenilda bunda fina");
});

app.listen(4220, () => {
    console.log("Servidor iniciado na porta 4220: http://localhost:4220/");
});