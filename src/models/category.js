const { Schema, model } = require('mongoose')
const categorySchema = new Schema(
    {
        name: { type: String, required: true},
        description: { type: String },
        posts: [{
            type: Schema.Types.ObjectId,
            ref: 'Posts'
        }]
    }
)

module.exports = model('Category', categorySchema)