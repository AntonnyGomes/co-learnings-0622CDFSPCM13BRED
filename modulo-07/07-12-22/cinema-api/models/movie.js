'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Movie.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    runtime: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    director: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    awards: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    actors: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    genre: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    releasedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Movie',
    tableName: 'movies',
  });
  return Movie;
};