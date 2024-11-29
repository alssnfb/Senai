const mongoose = require('mongoose');

const SalaSchema = new mongoose.Schema({
  numero: { type: String, required: true },
  capacidade: { type: Number, required: true },
  recursos: { type: [String], required: false }, // Ex.: ["Projetor", "Computadores"]
});

module.exports = mongoose.model('Sala', SalaSchema);
