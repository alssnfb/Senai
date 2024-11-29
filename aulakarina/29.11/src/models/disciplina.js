const mongoose = require('mongoose');

const DisciplinaSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  curso: { type: mongoose.Schema.Types.ObjectId, ref: 'Curso', required: true },
});

module.exports = mongoose.model('Disciplina', DisciplinaSchema);
