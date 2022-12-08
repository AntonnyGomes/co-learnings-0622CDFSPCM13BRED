module.exports = (err, req, res, next) => {
    const code = err.code ? err.code : 500;
    const errors = err.errors && err.errors.length ? err.errors : [
        {
            field: null,
            message: 'Something went wrong.'
        }
    ];

    return res.status(code).json(errors);
}
