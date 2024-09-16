import Joi from "joi";

export const updateInstructionDto = Joi.object({
    order_number: Joi.number().optional(),
    title: Joi.string().alphanum().optional(),
    recipe_id: Joi.string().optional()
})

export default updateInstructionDto;