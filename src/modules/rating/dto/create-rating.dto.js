import Joi from "joi";

export const createRatingDto = Joi.object({
    rating: Joi.number().required().min(1).max(5),
    user_id: Joi.string().required(),
    recipe_id: Joi.string().required()
})

export default createRatingDto