const express=require('express');
const mysql = require('mysql2');
const config = require('config');
const app=express.Router();

const dbConnectionDetails = {
    host: config.get("myserver"),
    port: config.get("myport"),
    user: config.get("myusername"),
    password: config.get("mypassword"),
    database: config.get("mydatabase")
};

app.get("/", (req, res) => {
    const connection = mysql.createConnection(dbConnectionDetails);

    connection.connect();
    connection.query("select * from users", (err, result) => {
        if (err == null) {
            res.json(result);
            // res.send(result);
        } else {
            res.json(err);
            //res.send(err);
        }
    })
    connection.end();
})


app.get("/:id", (req, res) => {
    const connection = mysql.createConnection(dbConnectionDetails);

    connection.connect();
    connection.query(`select * from users where id=${req.params.id}`, (err, result) => {
        if (err == null) {
            res.json(result[0]);
            // res.send(result);
        } else {
            res.json(err);
            //res.send(err);
        }
    })
    connection.end();
})

app.post("/", (req, res) => {
    // const connection = mysql.createConnection(dbConnectionDetails);
    // connection.connect();

    // var queryText="insert into users(name,address)"
    // connection.query(queryText, (err, result) => {
    //     if (err == null) {
    //         res.json(result);
    //         // res.send(result);
    //     } else {
    //         res.json(err);
    //         //res.send(err);
    //     }
    // })
    // connection.end();
    res.send("post");
})

app.put("/", (req, res) => {
    // const connection = mysql.createConnection(dbConnectionDetails);

    // connection.connect();
    // connection.query("select * from users", (err, result) => {
    //     if (err == null) {
    //         res.json(result);
    //         // res.send(result);
    //     } else {
    //         res.json(err);
    //         //res.send(err);
    //     }
    // })
    // connection.end();
    res.send("put");
})

app.delete("/", (req, res) => {
    // const connection = mysql.createConnection(dbConnectionDetails);

    // connection.connect();
    // connection.query("select * from users", (err, result) => {
    //     if (err == null) {
    //         res.json(result);
    //         // res.send(result);
    //     } else {
    //         res.json(err);
    //         //res.send(err);
    //     }
    // })
    // connection.end();
    res.send("delete");
})


module.exports=app;