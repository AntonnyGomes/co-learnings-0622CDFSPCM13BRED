module.exports = (req, res, next) => {
    const [ alert ] = req.flash('alert');
    const [ body ] = req.flash('body');
    const [ errors ] = req.flash('errors');

    res.locals = {
        ...req.locals,
        ...req.session,
        alert,
        body,
        errors,
    };
    next();
}