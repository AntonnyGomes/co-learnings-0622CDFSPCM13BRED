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
      // Relacao entre Sessoes e Filmes
      models.Movie.hasOne(models.Session);
      models.Session.belongsTo(models.Movie, { as: 'movies', foreignKey: 'moviesId' });

      // Relacao entre Sessoes e Salas
      models.Room.hasMany(models.Session);
      models.Session.belongsTo(models.Room, { as: 'rooms', foreignKey: 'roomsId'});
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