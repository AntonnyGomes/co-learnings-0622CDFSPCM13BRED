const { Room } = require('../../models');
const HttpNotFoundError = require('../utils/HttpNotFoundError');

module.exports = {
    index: async (req, res, next) => {
        try {
            const rooms = await Room.findAll();

            return res.json(rooms);
        } catch (error) {
            next(error);
        }
    },
    find: async (req, res, next) => {
        try {
            const room = await Room.findByPk(req.params.roomId);

            if (!room) throw HttpNotFoundError();

            return res.json(room);
        } catch (error) {
            next(error);
        }
    },
    create: async (req, res, next) => {
        try {
            const room = await Room.create(req.body);

            return res.status(201).json(room);
        } catch (error) {
            next(error);
        }
    },
    update: async (req, res, next) => {
        try {
            const room = await Room.update(req.body, {
                where: {
                    id: req.params.roomId,
                }
            });
    
            return res.json(room);
        } catch (error) {
            next(error);
        }
    },
    delete: async (req, res, next) => {
        try {
            await Room.destroy({
                where: {
                  id: req.params.roomId
                }
              });
        } catch (error) {
            next(error);
        }

        return res.json({});
    }
};
