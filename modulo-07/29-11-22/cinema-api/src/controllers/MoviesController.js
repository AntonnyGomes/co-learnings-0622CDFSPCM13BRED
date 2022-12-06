const { Movie } = require('../../models');
const HttpNotFoundError = require('../utils/HttpNotFoundError');

module.exports = {
    index: async (req, res, next) => {
        try {
            const movies = await Movie.findAll();

            return res.json(movies);
        } catch (error) {
            next(error);
        }
    },
    find: async (req, res, next) => {
        try {
            const movie = await Movie.findByPk(req.params.movieId);

            if (!movie) throw HttpNotFoundError();

            return res.json(movie);
        } catch (error) {
            next(error);
        }
    },
    create: async (req, res, next) => {
        try {
            const movie = await Movie.create(req.body);

            return res.status(201).json(movie);
        } catch (error) {
            next(error);
        }
    },
    update: async (req, res, next) => {
        try {
            const movie = await Movie.update(req.body, {
                where: {
                    id: req.params.movieId,
                }
            });
    
            return res.json(movie);
        } catch (error) {
            next(error);
        }
    },
    delete: async (req, res, next) => {
        try {
            await Movie.destroy({
                where: {
                  id: req.params.movieId
                }
              });
        } catch (error) {
            next(error);
        }

        return res.json({});
    }
};
