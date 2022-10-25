const movies = require('../../database/movies.json');

module.exports = {
    index: (req, res) => {
        return res.json(movies);
    },
    find: (req, res) => {
        const movie = movies.find(({ id }) => id == req.params.movieId);

        return res.json(movie);
    },
};
