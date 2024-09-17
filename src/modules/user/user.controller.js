import User from "./user.model.js"

export class UserController {
    #_model

    constructor() {
        this.#_model = User
    }

    getAllUsers = async (req, res) => {
        const allUsers = await this.#_model.find()

        res.status(200).send({
            message: "Success!✅",
            data: allUsers
        })
    }

    createUser = async (req, res) => {
        const { first_name, last_name, username, email, password } = req.body

        const newUser = await this.#_model.create({ first_name, last_name, username, email, password })

        res.status(201).send({
            message: "Successfully created!✅",
            data: newUser
        })
    }

    updateUser = async (req, res) => {
        const { first_name, last_name, username, email, password  } = req.body
        const { userId } = req.params

        const updateUser = await this.#_model.findByIdAndUpdate({ _id: userId }, { first_name, last_name, username, email, password })

        res.status(200).send({
            message: "Successfully updated!✅",
            data: updateUser
        })
    }

    deleteUser = async (req, res) => {
        const { userId } = req.params

        await this.#_model.findByIdAndDelete({ _id: userId })

        res.status(200).send({
            message: "Successfully deleted!✅"
        })
    }

}

export default new UserController()