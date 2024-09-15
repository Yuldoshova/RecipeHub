import { model, Schema } from "mongoose";

const spiceSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    recipes: [{
        type: Schema.Types.ObjectId,
        ref: "Recipe"
    }]
}, {
    collection: 'spices'
})

export const Spice = model('Spice', spiceSchema)

export default Spice