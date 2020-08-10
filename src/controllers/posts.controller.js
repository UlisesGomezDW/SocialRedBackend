const postsCtrl = {}
const Post = require('../models/posts')
const Category = require('..//models/category')

postsCtrl.getPosts = async (req, res) => {
    const posts = await Post.find()
    res.json(posts)
}

postsCtrl.createPost = (req, res) => {
    const { tittle, description, author, img } = req.body
    const newPost = new Post({
        tittle,
        description,
        author,
        img
    })
    Category.findById(req.params.id).then(category=>{
        newPost.category = category
        category.posts.push(newPost)

        newPost.save()
        .then(()=>res.json(newPost))
        .catch(e=>res.json(e))

        category.save()
        .then(()=>console.log("added"))
        .catch(e=>res.json(e))
    })
    .catch(e=>res.json(e))
}

postsCtrl.getPost = async (req, res) => {
    const post = await Post.findById(req.params.id)
    res.json(post)
}

postsCtrl.deletePost = async (req, res) => {
    await Post.findByIdAndDelete(req.params.id)
    res.json('post Deleted')
}

module.exports = postsCtrl