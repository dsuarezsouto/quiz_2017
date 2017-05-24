var path = require('path');

// Cargar ORM
var Sequelize = require('sequelize');

// Para usar en local BBDD SQLite:
//    DATABASE_URL = sqlite:///
//    DATABASE_STORAGE = quiz.sqlite
// Para usar en Heroku BBDD Postgres:
//    DATABASE_URL = postgres://user:passwd@host:port/database

var url, storage;

if (!process.env.DATABASE_URL) {
    url = "sqlite:///";
    storage = "quiz.sqlite";
} else {
    url = /*process.env.DATABASE_URL*/"postgres://gpodpqgecomruo:b01c53a147e762ba9a7c15bcc3ed2126f2369aad976f3f882cc3a78ff64a4131@ec2-23-23-234-118.compute-1.amazonaws.com:5432/d503kl17ksoavs";
    storage = process.env.DATABASE_STORAGE || "";
}

var sequelize = new Sequelize(url, {storage: storage});



// Importar la definicion de la tabla Quiz de quiz.js
var Quiz = sequelize.import(path.join(__dirname, 'quiz'));


exports.Quiz = Quiz; // exportar definición de tabla Quiz
