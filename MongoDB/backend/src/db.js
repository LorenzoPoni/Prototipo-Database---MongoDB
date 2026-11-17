const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const Animale = require('../modelli/animale');
const { URL, PORT } = require('../config/env');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', '..', 'frontend', 'public')));

const pageRoutes = require('./routes/pageroutes');
const databaseRoutes = require('./routes/database');

app.use('/', pageRoutes);
app.use('/', databaseRoutes);

/*
app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/", function(req, res) {
  var nomeanimale = String(req.body.nome);
  //spedizione prompt
  console.log(nomeanimale);
  //spedizione localhost
  res.send(nomeanimale);
  //spedizione mongodb
  const newAnimale = new Animale({
    nome: nomeanimale,
    presente: true
  })
  newAnimale.save().then(item => console.log(item)).catch(err => console.log(err));
});
*/

mongoose.connect(URL)
    .then(() => {
        console.log('Connected to the database');
        return Animale.find().sort({ datacquisito: -1 }).lean();
    })
    .then((items) => {
        console.log(items);
    })
    .catch((err) => {
        console.error(`Error connecting to the database: ${err}`);
    });

app.listen(PORT, () => {
    console.log(`Server avviato su http://localhost:${PORT}`);
});