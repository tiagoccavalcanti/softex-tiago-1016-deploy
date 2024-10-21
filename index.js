require("dotenv").config();
const express = require("express")
const {pool} = require("./db/connection");
const app = express();
const port = process.env.port

app.get("/tutores", async (rec, res)=>{
    try{
        const result = await pool.query("SELECT * FROM proprietarios");
        res.json(result.rows);
    }catch (err) {
        console.error(err);
        res.status(500).send("erro ao consultar tutores")
    }
});

// Rota para obter todos os pets
app.get("/pets",  async (req, res) => {
    console.log("ConsuItando a tabela pets...")
    const result = await pool.query("SELECT * FROM Animais");
    res.json(result.rows);
});

// Rota para obter todos os tratamentos
app.get("/tratamentos", async (req, res) => {
    const result = await pool.query("SELECT * FROM Tratamentos");
    res.json(result.rows);
});

// Rota para obter todos os exames
app.get("/exames" ,async (req, res) => {
const result = await pool.query("SELECT * FROM Exames");
res.json(result.result) ;
});

// Rota para obter todas as internacões
app.get("/internacoes", async (req, res) => {
    const result = await pool.query("SELECT * FROM Internacoes");
    res.json(result.rows);
});

/* // Rota para obter todos os pets que estão internados
app.get("/pets/internados", async (req, res) => {
const result = await pool.query("SELECT A.nome AS Nome_Animal, P.nome AS Nome_Proprietario, I.data_internacao, I.status FROM Animais A JOIN Proprietarios P ON A.proprietario_id = P.id JOIN Internacoes I ON A.id = I.animal_id WHERE I.status = 'internado' ");

res.json(result. rous);
}); */

/* // Rota para obter todos os pets em tratamento
app.get("/pets/tratamentos", async (req, res) => {
    const result = await pool .query( "SELECT A.nome AS Nome_Animal, P.nome AS Nome_Proprietario, I.data_internacao, T.descricao FROM Animais A JOIN Proprietarios P ON A.proprietario_id = P.id JOIN Internacoes I ON A.id = I.animal id JOIN Tratamentos T ON I.id = T.internacao_id WHERE I.status = 'Internado'");
    
    res.json( result.rows);
}); */
   

app.listen( port, () => {
    pool.connect().then(client => {
        console.log("connected to database");
        client.release();
    }).catch(err => {
        console.log("error connecting to databasae", err);
    });
    console.log(`server running on port ${port}`);
});