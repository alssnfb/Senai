const Professor = require('./models/professor.js');

// Listar professores
exports.listarProfessores = async (req, res) => {
  try {
    const professores = await Professor.find();
    res.json(professores);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao listar professores' });
  }
};

// Criar professor
exports.criarProfessor = async (req, res) => {
  try {
    const novoProfessor = new Professor(req.body);
    await novoProfessor.save();
    res.status(201).json(novoProfessor);
  } catch (err) {
    res.status(400).json({ error: 'Erro ao criar professor' });
  }
};
