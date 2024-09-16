import { model, Schema } from "mongoose"

const categorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false,

    },
    image_url: {
        type: String,
        required: [true, "Image is required!"]
    },
    recipes: [{
        type: Schema.Types.ObjectId,
        ref: 'Recipe'
    }]
}, {
    collection: "categories"
})

export const Category = model('Category', categorySchema)

export default Category