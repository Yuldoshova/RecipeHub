import Category from "./category.model.js"

export class CategoryController {
    #_model

    constructor() {
        this.#_model = Category
    }

    getAllCategories = async (req, res) => {
        const allCategories = await this.#_model.find()

        res.status(200).send({
            message: "Success",
            data: allCategories
        })
    }

    createCategory = async (req, res) => {
        const { name, description } = req.body
        const image_url = req.file.filename

        const newCategory = await this.#_model.create({
            name, description, image_url
        })

        res.status(201).send({
            message: "Successfully created!✅",
            data: newCategory
        })
    }

    updateCategory = async (req, res) => {
        const { name, description } = req.body
        const { categoryId } = req.params
        const image_url = req.file.filename

        const updatedCategory = await this.#_model.findByIdAndUpdate({ _id: categoryId }, {
            name, description, image_url
        })

        res.status(200).send({
            message: "Successfully updated!✅",
            data: updatedCategory
        })
    }

    deleteCategory = async (req, res) => {
        const { categoryId } = req.params

        await this.#_model.findByIdAndDelete({ _id: categoryId })

        res.status(200).send({
            message: "Successfully deleted!✅",
        })
    }

}

export default new CategoryController()