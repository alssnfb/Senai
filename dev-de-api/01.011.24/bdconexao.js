
const {Pool} = require("pg")

const pool = new Pool({
    user:"postgres",
    host: "localhost",
    database: "registroUsuarios",
    password: "postgres",
    port: 5432,
    max: 5,
    idleTimeoutMillis: 30000
});

async function selecionarTodosUsuarios(){

    try{
        const responseDB = await pool.query("SELECT * FROM usuarios");
        console.log("Usuários cadastrados:", responseDB.rows);
    }catch(error){
        console.log("A consulta retornou o seguinte erro: "+ error.message);
    }
    
}

selecionarTodosUsuarios()