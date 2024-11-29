const mongoose = require('mongoose');

const ProfessorSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  especialidade: { type: String, required: true },
  matricula: { type: String, unique: true, required: true },
});

module.exports = mongoose.model('Professor', ProfessorSchema);
