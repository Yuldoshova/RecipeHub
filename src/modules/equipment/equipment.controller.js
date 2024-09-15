import Equipment from "./equipment.model.js";

export class EquipmentController {
    #_model;

    constructor() {
        this.#_model = Equipment
    }

    getAllEquipments = async (req, res) => {

        const allEquipments = await this.#_model.find()

        res.status(200).send({
            message: "Success!✅",
            data: allEquipments
        })
    }

    getAllEquipmentsByRecipeId = async (req, res) => {

    }

    createEquipment = async (req, res) => {
        const { name } = req.body;

        const newEquipment = await this.#_model.create({ name })

        res.status(201).send({
            message: "Successfully created!✅",
            data: newEquipment
        })
    }

    updateEquipment = async (req, res) => {
        const { name } = req.body
        const { equipmentId } = req.params

        const updatedEquipment = await this.#_model.findByIdAndUpdate({ _id: equipmentId }, { name })

        res.status(200).send({
            message: "Successfully updated!✅",
            data: updatedEquipment
        })
    }

    deleteEquipment = async (req, res) => {
        const { equipmentId } = req.params

        await this.#_model.findByIdAndDelete({ _id: equipmentId })

        res.status(200).send({
            message: "Successfully deleted!✅"
        })
    }
}

export default new EquipmentController()