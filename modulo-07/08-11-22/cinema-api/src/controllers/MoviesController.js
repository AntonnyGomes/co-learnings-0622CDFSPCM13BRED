const fs = require('fs');
const path = require('path');

const movies = require('../../database/movies.json');
const HttpNotFoundError = require('../utils/HttpNotFoundError');

module.exports = {
    index: (req, res) => {
        return res.json(movies);
    },
    find: (req, res) => {
        const movie = movies.find(({ id }) => id == req.params.movieId);

        if (!movie) throw HttpNotFoundError();

        return res.json(movie);
    },
    create: (req, res) => {
        const id = new Date().getTime();
        const movie = {
            id,
            ...req.body,
        };
        movies.push(movie);
        fs.writeFileSync(path.resolve('./database/movies.json'), JSON.stringify(movies, null, 4));

        return res.status(201).json(movie);
    },
    update: (req, res) => {
        const index = movies.findIndex(({ id }) => id == req.params.movieId);
        movies[index] = {
            id: Number(req.params.movieId),
            ...req.body,
        }
        fs.writeFileSync(path.resolve('./database/movies.json'), JSON.stringify(movies, null, 4));

        return res.json(movies[index]);
    },
    delete: (req, res) => {
        movies = movies.filter(({ id }) => id != req.params.movieId);
        fs.writeFileSync(path.resolve('./database/movies.json'), JSON.stringify(movies, null, 4));

        return res.json({});
    }
};
