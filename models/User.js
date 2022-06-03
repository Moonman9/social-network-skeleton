const { Schema, model } = require('mongoose');

// user schema
const UserSchema = new Schema(
    {
        // requires a unique string of characters for username
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        // requires a unique appropriate email
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Please input with a valid email address']
        },
        // sets up array for user thoughts
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ],
        // sets up array for user friends
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ]
    },
    {
        toJson: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

//gets the users friend count
UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

// create user model by passing through the user schema
const User = model('User', UserSchema);

module.exports = User