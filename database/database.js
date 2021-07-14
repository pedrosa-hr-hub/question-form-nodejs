const Sequelize = require('sequelize');

const connection = new Sequelize('guiaperguntas', 'root', '164087', {
     host: 'localhost',
     dialect: 'mysql'
});

module.exports = connection;