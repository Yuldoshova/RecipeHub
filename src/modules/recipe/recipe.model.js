import { model, Schema } from "mongoose";

const recipeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    video_url: {
        type: String
    },
    owner_id: {
        type: Schema.Types.ObjectId,
        required: true
    },
    category_id: {
        type: Schema.Types.ObjectId,
        required: true
    },
    preparation_time: {
        type: String,
        required: true
    },
    cooking_time: {
        type: String,
        required: true
    },
    servings: {
        type: Number,
        required: false
    },
    instructions: [{
        type: Schema.Types.ObjectId,
        ref: 'Instruction'
    }],
    ingredients: [{
        type: Schema.Types.ObjectId,
        ref: 'Ingredient'
    }],
    equipments: [{
        type: Schema.Types.ObjectId,
        ref: 'Equipment'
    }],
    spices: [{
        type: Schema.Types.ObjectId,
        ref: 'Spices'
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
    collection: "recipes",
    timestamps: true
})

export const Recipe = model('Recipe', recipeSchema)