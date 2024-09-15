import Joi from "joi"

export const createEquipmentDto = Joi.object({
    name: Joi.string().alphanum().required()
})

export default createEquipmentDto