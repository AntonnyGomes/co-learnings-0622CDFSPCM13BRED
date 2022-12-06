'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('movies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      runtime: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      director: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      awards: {
        type: Sequelize.JSON,
        allowNull: false,
      },
      actors: {
        type: Sequelize.JSON,
        allowNull: false,
      },
      genre: {
        type: Sequelize.JSON,
        allowNull: false,
      },
      releasedAt: {
        type: Sequelize.DATE,
        allowNull: false,
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
    await queryInterface.dropTable('movies');
  }
};