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

//manage user by id
router
  .route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

module.exports = router;