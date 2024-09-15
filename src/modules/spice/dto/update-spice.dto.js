import Joi from "joi";

export const updateSpiceDto = Joi.object({
    name: Joi.string().alphanum().optional()
})

export default updateSpiceDto;