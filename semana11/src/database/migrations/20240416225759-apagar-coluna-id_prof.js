'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.removeColumn('professores', 'professor_id', { 
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER 
      },
      professor_id:{
        allowNull: false,
        type: Sequelize.STRING,
      },
      curso:{
        allowNull: false,
        type: Sequelize.STRING  
      },
      celular:{
        allowNull: false,
        type: Sequelize.INTEGER
      }
    
    });

     
  },

  async down (queryInterface, Sequelize) {
  
    await queryInterface.addColumn('professores');
    
  }
};