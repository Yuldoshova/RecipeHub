import Joi from "joi"

export const createSpiceDto = Joi.object({
    name: Joi.string().alphanum().required()
})

export default createSpiceDto