module.exports = (req, res, next) => {
    const [ alert ] = req.flash('alert');

    res.locals = {
        ...req.locals,
        ...req.session,
        alert,
    };
    next();
}