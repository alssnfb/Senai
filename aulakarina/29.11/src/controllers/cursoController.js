const Curso = require('./models/curso.js');

exports.listarCursos = async (req, res) => {
  try {
    const cursos = await Curso.find();
    res.json(cursos);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao listar cursos' });
  }
};

exports.criarCurso = async (req, res) => {
  try {
    const novoCurso = new Curso(req.body);
    await novoCurso.save();
    res.status(201).json(novoCurso);
  } catch (err) {
    res.status(400).json({ error: 'Erro ao criar curso' });
  }
};
