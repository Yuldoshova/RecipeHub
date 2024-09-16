import { model, Schema } from "mongoose";

const ratingSchema = new Schema({
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    user_id: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    recipe_id: {
        type: Schema.Types.ObjectId,
        required: true,
    }
}, {
    collection: "ratings",
    timestamps: true
})

export const Rating = model('Rating', ratingSchema)

export default Rating