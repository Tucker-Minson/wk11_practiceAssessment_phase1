'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Airplanes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      airlineCode: {
        type: Sequelize.INTEGER
      },
      flightNumber: {
        type: Sequelize.INTEGER
      },
      inService: {
        defaultValue: true,
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      maxNumPassengers: {
        type: Sequelize.INTEGER
      },
      currentNumPassengers: {
        type: Sequelize.INTEGER
      },
      firstFlightDate: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Airplanes');
  }
};
