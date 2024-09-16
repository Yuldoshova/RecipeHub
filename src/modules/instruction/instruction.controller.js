import Instruction from './instruction.model.js';

export class InstructionController {
    #_model;

    constructor() {
        this.#_model = Instruction
    }

    getAllInstructions = async (req, res) => {

        const allInstructions = await this.#_model.find()

        res.status(200).send({
            message: "Success!✅",
            data: allInstructions
        })
    }

    getAllInstructionsByRecipeId = async (req, res) => {

    }

    createInstruction = async (req, res) => {
        const { order_number, title, recipe_id } = req.body;

        const newInstruction = await this.#_model.create({ order_number, title, recipe_id  })

        res.status(201).send({
            message: "Successfully created!✅",
            data: newInstruction
        })
    }

    updateInstruction = async (req, res) => {
        const { order_number, title, recipe_id  } = req.body
        const { instructionId } = req.params

        const updateInstruction = await this.#_model.findByIdAndUpdate({ _id: instructionId }, { order_number, title, recipe_id  })

        res.status(200).send({
            message: "Successfully updated!✅",
            data: updateInstruction
        })
    }

    deleteInstruction = async (req, res) => {
        const { instructionId } = req.params

        await this.#_model.findByIdAndDelete({ _id: instructionId })

        res.status(200).send({
            message: "Successfully deleted!✅"
        })
    }
}

export default new InstructionController()