const Turma = require('./models/turma.js');

exports.listarTurmas = async (req, res) => {
  try {
    const turmas = await Turma.find()
      .populate('curso')
      .populate('alunos')
      .populate('professor');
    res.json(turmas);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao listar turmas' });
  }
};

exports.criarTurma = async (req, res) => {
  try {
    const novaTurma = new Turma(req.body);
    await novaTurma.save();
    res.status(201).json(novaTurma);
  } catch (err) {
    res.status(400).json({ error: 'Erro ao criar turma' });
  }
};
