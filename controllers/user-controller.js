const { User } = require('../models');

const userController = {
    getAllUsers(req, res)
    {
        User.find({})
            .then(dbUserData => res.json(dbUserData))
            .catch(err => {
                console.log(err);
                res.sendStatus(400);
            });
    },
    addNewUser({ body }, res)
    {
        User.create(body)
          .then(dbUserData => res.json(dbUserData))
          .catch(err => res.json(err));
    },
}

module.exports = userController;