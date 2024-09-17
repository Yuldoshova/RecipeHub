import Joi from "joi";

export const createUserDto = Joi.object({
    first_name: Joi.string().required(),
    last_name: Joi.string().optional(),
    username: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required()
})

export default createUserDto