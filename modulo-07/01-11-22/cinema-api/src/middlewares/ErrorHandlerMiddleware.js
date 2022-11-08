module.exports = (err, req, res, next) => {
    return res.status(500).json([
        {
            field: null,
            message: 'Something went wrong.'
        }
    ]);
}
