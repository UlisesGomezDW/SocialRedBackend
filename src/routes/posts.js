const { Router } = require('express');
const router = Router();

const { getPost, getPosts, createPost, deletePost, updatePost } = require('../controllers/posts.controller')

router.route('/')
    .get(getPosts)

router.route('/:id')
    .get(getPost)
    .delete(deletePost)
    .post(createPost)
    .put(updatePost)

module.exports = router
