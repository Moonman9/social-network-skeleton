const router = require('express').Router();

// GET and POST routes for users
router
    .route('/')
    .get(getAllUsers)
    .post(addNewUser);