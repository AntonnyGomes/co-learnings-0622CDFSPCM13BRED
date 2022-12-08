const { Session } = require('../../models');
const HttpNotFoundError = require('../utils/HttpNotFoundError');

module.exports = {
    index: async (req, res, next) => {
        try {
            const sessions = await Session.findAll();

            return res.json(sessions);
        } catch (error) {
            next(error);
        }
    },
    find: async (req, res, next) => {
        try {
            const session = await Session.findByPk(req.params.sessionId);

            if (!session) throw HttpNotFoundError();

            return res.json(session);
        } catch (error) {
            next(error);
        }
    },
    create: async (req, res, next) => {
        try {
            const session = await Session.create(req.body);

            return res.status(201).json(session);
        } catch (error) {
            next(error);
        }
    },
    update: async (req, res, next) => {
        try {
            const session = await Session.update(req.body, {
                where: {
                    id: req.params.sessionId,
                }
            });
    
            return res.json(session);
        } catch (error) {
            next(error);
        }
    },
    delete: async (req, res, next) => {
        try {
            await Session.destroy({
                where: {
                  id: req.params.sessionId
                }
              });
        } catch (error) {
            next(error);
        }

        return res.json({});
    }
};
