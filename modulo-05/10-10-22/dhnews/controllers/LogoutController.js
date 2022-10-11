module.exports = {
    logout: (req, res) => {
        req.session.usuario = null
        return res.redirect('/');
    }
}