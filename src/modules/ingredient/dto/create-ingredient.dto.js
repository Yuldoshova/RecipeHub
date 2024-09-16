import Joi from "joi"

export const createIngredientDto = Joi.object({
    name: Joi.string().alphanum().required(),
    amount: Joi.string().required(),
    recipe_id: Joi.string().required()
})

export default createIngredientDto