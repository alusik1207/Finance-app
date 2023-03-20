const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../utils/database')

const Incomes = sequelize.define('Incomes', {
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
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'incomes' // We need to choose the model name
});

module.exports = Incomes
