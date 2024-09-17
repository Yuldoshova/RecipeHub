import Joi from "joi";

export const updateUserDto = Joi.object({
    first_name: Joi.string().optional(),
    last_name: Joi.string().optional(),
    username: Joi.string().optional(),
    email: Joi.string().optional(),
    password: Joi.string().optional()
})

export default updateUserDto