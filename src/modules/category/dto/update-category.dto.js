import Joi from "joi";

export const updateCategoryDto = Joi.object({
    name: Joi.string().optional(),
    description: Joi.string().optional(),
    image_url: Joi.string().optional()
})

export default updateCategoryDto