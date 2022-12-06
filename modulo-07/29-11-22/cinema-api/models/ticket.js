'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ticket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Relacao de Ingresso com Usuario
      models.User.hasMany(models.Ticket);
      models.Ticket.belongsTo(models.User, { as: 'users', foreignKey: 'usersId' });

      // Relacao de Ingresso com Sessao
      models.Session.hasMany(models.Ticket, { as: 'sessions', foreignKey: 'sessionsId' });
      models.Ticket.belongsTo(models.Session);
    }
  }
  Ticket.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Ticket',
  });
  return Ticket;
};