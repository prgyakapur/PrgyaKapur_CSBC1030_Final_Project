// db.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('csbc1030', 'root', 'Prgya@123', {  
  dialect: 'mysql',
  host: 'localhost',
});

module.exports = 
  sequelize;
