const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../utils/database')
const Expenses = sequelize.define('Expenses', {
  // Model attributes are defined here
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true,
    unsigned: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
   
  },
  amount: {
    type: DataTypes.BIGINT,
    allowNull: false,
    unsigned: true
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userId: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
},
 {
 tableName:'expenses'
});

module.exports = Expenses