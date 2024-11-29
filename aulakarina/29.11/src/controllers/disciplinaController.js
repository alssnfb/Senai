const Disciplina = require('./models/disciplina.js');

exports.listarDisciplinas = async (req, res) => {
  try {
    const disciplinas = await Disciplina.find().populate('curso');
    res.json(disciplinas);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao listar disciplinas' });
  }
};

exports.criarDisciplina = async (req, res) => {
  try {
    const novaDisciplina = new Disciplina(req.body);
    await novaDisciplina.save();
    res.status(201).json(novaDisciplina);
  } catch (err) {
    res.status(400).json({ error: 'Erro ao criar disciplina' });
  }
};
