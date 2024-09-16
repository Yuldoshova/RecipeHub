import { model, Schema } from "mongoose";

const instructionSchema = new Schema({
    order_number: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    recipe_id: {
        type: Schema.Types.ObjectId,
        required: true
    }
}, {
    collection: 'instructions'
})

export const Instruction = model('Instruction', instructionSchema)

export default Instruction