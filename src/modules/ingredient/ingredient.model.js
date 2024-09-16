import { model, Schema } from "mongoose";

const ingredientSchema = new Schema({
    amount: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    recipe_id: {
        type: Schema.Types.ObjectId,
        required: true
    }
}, {
    collection: 'ingredients'
})

export const Ingredient = model('Ingredient', ingredientSchema)

export default Ingredient