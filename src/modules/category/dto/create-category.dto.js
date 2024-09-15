import Joi from "joi";

export const createCategoryDto = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().optional(),
    image_url: Joi.string().required()
})

export default createCategoryDto