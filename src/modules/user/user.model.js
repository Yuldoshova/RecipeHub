import { model, Schema } from "mongoose";

const userSchema = new Schema({
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: false,
    },
    first_name: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
    },
    ratings: [{
        type: Schema.Types.ObjectId,
        ref: 'Rating'
    }],
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }],
    recipes: [{
        type: Schema.Types.ObjectId,
        ref: 'Recipe'
    }]
}, {
    collection: 'users',
    timestamps: true
})

export const User = model('User', userSchema)

export default User