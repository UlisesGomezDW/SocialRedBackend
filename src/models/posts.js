const { Schema, model } = require('mongoose')

const PostsSchema = new Schema(
    {
        tittle: String,
        description: { type: String },
        author: { type: String },
        img: { type: String },
        category: { type: Schema.Types.ObjectId, ref: 'Category'},
    },
    {
        timestamps: true
    }
)

module.exports = model('Posts', PostsSchema)