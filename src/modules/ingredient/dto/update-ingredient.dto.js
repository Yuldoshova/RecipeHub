import Joi from "joi";

export const updateIngredientDto = Joi.object({
    name: Joi.string().alphanum().optional(),
    amount: Joi.string().optional(),
    recipe_id: Joi.string().optional()
})

export default updateIngredientDto;