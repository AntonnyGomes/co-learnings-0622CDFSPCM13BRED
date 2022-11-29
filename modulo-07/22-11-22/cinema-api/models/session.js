'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Session extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Session.hasOne(models.Movie);
      models.Session.belongsTo(models.Room);
    }
  }
  Session.init({
    startAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    endAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
  }, {
    sequelize,
    modelName: 'Session',
  });
  return Session;
};