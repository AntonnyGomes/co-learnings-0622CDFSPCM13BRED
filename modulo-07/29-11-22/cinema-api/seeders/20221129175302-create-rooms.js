'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('rooms', [{
      capacity: 50,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      capacity: 25,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      capacity: 37,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      capacity: 90,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('rooms', null, {});
  }
};
