import { model, Schema } from "mongoose";

const commentSchema = new Schema({
    text: {
        type: String,
        required: true,
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
    collection: "comments",
    timestamps: true
})

export const Comment = model('Comment', commentSchema)

export default Comment