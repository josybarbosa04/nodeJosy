const express = require ('express');

const app = express();

app.get("/", (req, res) => {
    res.send("Josenilda Josenilda bunda fina");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Servidor iniciado na porta ${PORT}: http://localhost:${PORT}/`);
});