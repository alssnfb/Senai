const mongoose = require('mongoose');

const CursoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  duracao: { type: Number, required: true }, // Duração em meses
});

module.exports = mongoose.model('Curso', CursoSchema);
