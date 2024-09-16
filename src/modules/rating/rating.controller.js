import Rating from "./rating.model.js"

export class RatingController {
    #_model

    constructor() {
        this.#_model = Rating
    }

    getAllRatings = async (req, res) => {
        const allRatings = await this.#_model.find()

        res.status(200).send({
            message: "Success",
            data: allRatings
        })
    }

    createRating = async (req, res) => {
        const { rating, user_id, recipe_id } = req.body

        const newRating = await this.#_model.create({
            rating, user_id, recipe_id
        })

        res.status(201).send({
            message: "Successfully created!✅",
            data: newRating
        })
    }

    updateRating = async (req, res) => {
        const { rating, user_id, recipe_id } = req.body
        const { ratingId } = req.params

        const updatedRating = await this.#_model.findByIdAndUpdate({ _id: ratingId }, {
            rating, user_id, recipe_id,
        })

        res.status(200).send({
            message: "Successfully updated!✅",
            data: updatedRating
        })
    }

    deleteRating = async (req, res) => {
        const { ratingId } = req.params

        await this.#_model.findByIdAndDelete({ _id: ratingId })

        res.status(200).send({
            message: "Successfully deleted!✅",
        })
    }

}

export default new RatingController()