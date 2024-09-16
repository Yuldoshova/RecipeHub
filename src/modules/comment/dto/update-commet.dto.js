import Joi from "joi";

export const updateCommentDto = Joi.object({
    rating: Joi.number().optional().min(1).max(5),
    user_id: Joi.string().optional(),
    recipe_id: Joi.string().optional()
})

export default updateRatingDto