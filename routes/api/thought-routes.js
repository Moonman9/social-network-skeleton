const router = require('express').Router();

const {
    getAllThoughts,
    addNewThought,
    getThoughtById,
    updateThought,
    deleteThought,
    addNewReaction,
    deleteReaction
} = require('../../controllers/thought-controller');

// /api/thoughts/
router
    .route('/')
    .get(getAllThoughts);

// /api/thoughts/:userId
router
    .route('/:userId')
    .post(addNewThought);

// /api/thoughts/:thoughtId
router
    .route('/:thoughtId')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);

// /api/thoughts/:thoughtId/reactions
router
    .route('/:thoughtId/reactions')
    .post(addNewReaction);

// /api/thoughts/:thoughtId/reactions/:reactionId
router
    .route('/:thoughtId/reactions/:reactionId')
    .delete(deleteReaction);

module.exports = router;