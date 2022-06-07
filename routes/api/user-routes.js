const router = require('express').Router();

const {
    getAllUsers,
    addNewUser,
    getUserById,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
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

//add and remove friends
router
    .route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(deleteFriend);

module.exports = router;