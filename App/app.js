var express = require('express')
var app = express()
var cors =  require('cors')

app.use(cors())
app.use(express.json())

app.get('/produtos', function (req, res, next) {
    var mysql = require('mysql')
    var connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "password",
        database: "fseletro"
    });

    connection.query("SELECT * FROM produtos",(error,result) => {
        res.json(result);
        console.log(result);
        
    });

});

app.post('/contato', (req, res) => { 

    const post = req.body
    console.log(post)


    var mysql = require('mysql')
    var connection = mysql.createConnection ({
        host: 'localhost',
        user: 'root',
        password:"password",
        database: 'fseletro'
    });

    let dados =[] 

    dados.push( {
        nome: req.body.nome, comentario: req.body.comentario
    });

    connection.query("INSERT INTO comentario SET ?", post, () => {
        dados=[]
        return res.json({
            mensagem: "Dados enviados com sucesso"
        })
        
    });

});


app.listen(3050,function() {
    console.log("Servidor rodando!");
});
