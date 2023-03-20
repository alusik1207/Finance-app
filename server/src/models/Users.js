const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const Users = sequelize.define('User', {
  // Model attributes are defined here
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true,
    unsigned: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
   
  },
  login: {
    type: DataTypes.STRING,
    allowNull: false,
    
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
 
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
},
 {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'users' // We need to choose the model name
});

module.exports = Users