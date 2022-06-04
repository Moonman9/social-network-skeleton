const { Schema, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

//reaction schema only
const ReactionSchema = new Schema(
    {
        // Stored using mongoose set as a new ObjectId
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            required: true,
            validate: [({ length }) => length <= 280, 'Reaction can only be a maximum of 280 Characters long.']

        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        }
    }
)

module.exports = ReactionSchema;