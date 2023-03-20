'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, {DataTypes}) {
   await queryInterface.createTable('users', {
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
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
