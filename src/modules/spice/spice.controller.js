import Spice from './spice.model.js'

export class SpiceController {
    #_model;

    constructor() {
        this.#_model = Spice
    }

    getAllSpices = async (req, res) => {

        const allSpices = await this.#_model.find()

        res.status(200).send({
            message: "Success!✅",
            data: allSpices
        })
    }

    getAllSpicesByRecipeId = async (req, res) => {

    }

    createSpice = async (req, res) => {
        const { name } = req.body;

        const newSpice = await this.#_model.create({ name })

        res.status(201).send({
            message: "Successfully created!✅",
            data: newSpice
        })
    }

    updateSpice = async (req, res) => {
        const { name } = req.body
        const { spiceId } = req.params

        const updatedSpice = await this.#_model.findByIdAndUpdate({ _id: spiceId }, { name })

        res.status(200).send({
            message: "Successfully updated!✅",
            data: updatedSpice
        })
    }

    deleteSpice = async (req, res) => {
        const { spiceId } = req.params

        await this.#_model.findByIdAndDelete({ _id: spiceId })

        res.status(200).send({
            message: "Successfully deleted!✅"
        })
    }
}

export default new SpiceController()