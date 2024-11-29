const Sala = require('./models/sala.js');

exports.listarSalas = async (req, res) => {
  try {
    const salas = await Sala.find();
    res.json(salas);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao listar salas' });
  }
};

exports.criarSala = async (req, res) => {
  try {
    const novaSala = new Sala(req.body);
    await novaSala.save();
    res.status(201).json(novaSala);
  } catch (err) {
    res.status(400).json({ error: 'Erro ao criar sala' });
  }
};
