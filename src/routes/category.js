const { Router } = require('express');
const router = Router();

const { getCategories, getCategory, createCategory, deleteCategory, getPostOnCategory, updateCategory } = require('../controllers/category.controller')

router.route('/')
    .get(getCategories)
    .post(createCategory)

router.route('/:id')
    .get(getCategory)
    .delete(deleteCategory)
    .put(updateCategory)

router.route('/:id/posts/')
    .get(getPostOnCategory)


module.exports = router
