const router = require('express').Router();

const {
    getAllUsers,
    addNewUser
} = require('../../controllers/user-controller');

// GET and POST routes for users
router
    .route('/')
    .get(getAllUsers)
    .post(addNewUser);

module.exports = router;