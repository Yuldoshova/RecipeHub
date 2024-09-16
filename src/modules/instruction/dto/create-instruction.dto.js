import Joi from "joi"

export const createInstructionDto = Joi.object({
    order_number: Joi.number().required(),
    title: Joi.string().alphanum().required(),
    recipe_id: Joi.string().required()
})

export default createInstructionDto