import Joi from "joi";

export const updateEquipmentDto = Joi.object({
    name: Joi.string().alphanum().optional()
})

export default updateEquipmentDto;