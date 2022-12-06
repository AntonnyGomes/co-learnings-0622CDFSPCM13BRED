'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(transaction => {
      return Promise.all([
        queryInterface.addColumn('sessions', 'roomsId', {
          type: Sequelize.DataTypes.INTEGER,
          references: {
           model: {
            tableName: 'rooms'
           },
           key: 'id',
          },
          allowNull: false,
        }, { transaction }),
        queryInterface.addColumn('sessions', 'moviesId', {
          type: Sequelize.DataTypes.INTEGER,
          references: {
            model: {
              tableName: 'movies',
            },
            key: 'id',
          },
          allowNull: false,
        }, { transaction })
      ]);
    });
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(transaction => {
      return Promise.all([
        queryInterface.removeColumn('sessions', 'roomsId', { transaction }),
        queryInterface.removeColumn('sessions', 'moviesId', { transaction }),
      ]);
    });
  }
};
