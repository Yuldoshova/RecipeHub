import Comment from "./comment.model.js"


export class CommentController {
    #_model

    constructor() {
        this.#_model = Comment
    }

    getAllComments = async (req, res) => {
        const allComments = await this.#_model.find()

        res.status(200).send({
            message: "Success",
            data: allComments
        })
    }

    createComment = async (req, res) => {
        const { text, user_id, recipe_id } = req.body

        const newComment = await this.#_model.create({
            text, user_id, recipe_id
        })

        res.status(201).send({
            message: "Successfully created!✅",
            data: newComment
        })
    }

    updateComment = async (req, res) => {
        const { text, user_id, recipe_id } = req.body
        const { commentId } = req.params

        const updatedComment = await this.#_model.findByIdAndUpdate({ _id: commentId }, {
            text, user_id, recipe_id,
        })

        res.status(200).send({
            message: "Successfully updated!✅",
            data: updatedComment
        })
    }

    deleteComment = async (req, res) => {
        const { commentId } = req.params

        await this.#_model.findByIdAndDelete({ _id: commentId })

        res.status(200).send({
            message: "Successfully deleted!✅",
        })
    }

}

export default new CommentController()