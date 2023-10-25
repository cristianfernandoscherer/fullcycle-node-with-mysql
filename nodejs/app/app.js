const express = require('express')
const app = express()
const port = 8080

const config = {
    host: 'db-desafio',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

const mysql = require("mysql")

function getConnection() {
    return mysql.createConnection(config)
}

app.use(express.json());
app.post('/', (req, res) => {
    const payload = req.body;

    var connection = getConnection();
    const sql = `INSERT INTO people(name) values('${payload['name']}')`
    connection.query(sql)

    var retornoHTML = "";
    connection.query('SELECT * FROM people', function (err, result, fields) {
        var peoples = JSON.parse(JSON.stringify(result));
        peoples.forEach(element => {
            retornoHTML += element['name'] + `<br>`;
        });
        res.send('<h1>Full Cycle Rocks!</h1><br>' + retornoHTML)
    });
    connection.end();
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

