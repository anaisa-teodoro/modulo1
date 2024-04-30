'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.addColumn('professores', 'salario', { 
        allowNull: false,    
        type: Sequelize.FLOAT 
     
    });

     
  },

  async down (queryInterface, Sequelize) {
  
    await queryInterface.removeColumn('professores');
    
  }
};