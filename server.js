const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const DepoimentoSchema = require('./schemas/DepoimentoSchema');
mongoose.connect(
    'mongodb+srv://admin:admin@cluster0.3s1na.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true }
);

const server = express();

server.use(cors());
server.use(express.json());

server.post('/depoimento', async (req, res) => {

    const { nome, depoimento, data_hora } = req.body;

    const depoimentoRegistro = await DepoimentoSchema.create({ nome, depoimento, data_hora });

    res.status(201).json(depoimentoRegistro);
});

server.get('/depoimento', async(req, res)=>{

    const depoimentos = await DepoimentoSchema.find();

    res.status(200).json(depoimentos);

})

const port = process.env.PORT || 3333;
server.listen(port, () => console.info(`Servidor iniciando na porta ${port}`));