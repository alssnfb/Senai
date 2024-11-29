const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Rotas
const alunoRoutes = require('./routes/alunoRoutes.js');
const professorRoutes = require('./routes/professorRoutes.js');
const cursoRoutes = require('./routes/cursoRoutes.js');
const disciplinaRoutes = require('./routes/disciplinaRoutes.js');
const turmaRoutes = require('./routes/turmaRoutes.js');
const salaRoutes = require('./routes/salaRoutes.js');

dotenv.config();
connectDB();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rotas
app.use('/api/alunos', alunoRoutes);
app.use('/api/professores', professorRoutes);
app.use('/api/cursos', cursoRoutes);
app.use('/api/disciplinas', disciplinaRoutes);
app.use('/api/turmas', turmaRoutes);
app.use('/api/salas', salaRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
