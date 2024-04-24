//npm install express
const express = require('express')
var bodyParser = require('body-parser')
const app = express()
// npm i cors
var cors = require("cors");
app.use(cors());

var jsonParser = bodyParser.json()

chaves = {  'liga': 0,
            'desliga': 0,}

velocidade = {msgPot : 0}

confirmacao = {confirmaMotor : 0}

//***********************controle das chave**********************
// aguarda postagem da página web feita através dos botões criados em html
app.post('/chaves', jsonParser, function (req, res) {       
    res.writeHead(200, { 'Content-Type': 'application/json', mode: "cors"});
    chaves = req.body;
    console.log(chaves);
    res.end();
})

// aguardando o get da velocidade do motor
app.get('/velocidade', function (req, res){
    res.writeHead(200, { 'Content-Type': 'application/json', mode: "cors"});
    res.write(JSON.stringify(velocidade));  
    res.end(); 
})
//*************************************************************** 

// aguardando o get do clp
app.get('/confirmacao', function (req, res){
    res.writeHead(200, { 'Content-Type': 'application/json', mode: "cors"});
    res.write(JSON.stringify(confirmacao));  
    res.end(); 
})

//***********************controle do sensor**********************
// aguarda postagem da da planta lean com os dados da produção
app.post('/confirmacao', jsonParser, function (req, res) {       
    res.writeHead(200, { 'Content-Type': 'application/json', mode: "cors"});
    producao = req.body;
    console.log(confirmacao);
    res.end();
})

app.listen(3000)