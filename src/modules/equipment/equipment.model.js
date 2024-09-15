import { model, Schema } from "mongoose";

const equipmentSchema = new Schema({
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
    collection: 'equipments'
})

export const Equipment = model('Equipment', equipmentSchema)

export default Equipment