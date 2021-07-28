const {Schema, model} = require('mongoose');

const DepoimentoSchema = new Schema({
    nome: String,
    depoimento: String,
    data_hora: Date
});

module.exports = model('Depoimento', DepoimentoSchema);