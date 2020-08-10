const categoryCtrl = {}
const Category = require('../models/category')

categoryCtrl.getCategories = async (req, res) => {
    const categories = await Category.find()
    res.json(categories)
}

categoryCtrl.createCategory = async (req, res) => {
    const { name, description } = req.body
    const newCategory = new Category({
        name,
        description
    })
    await newCategory.save()
    res.json(newCategory)
}

categoryCtrl.getCategory = async (req, res) => {
    const category = await Category.findById(req.params.id)
    res.json(category)
}

categoryCtrl.deleteCategory = async (req, res) => {
    await Category.findByIdAndDelete(req.params.id)
    res.json('category Deleted')
}

categoryCtrl.updateCategory = async (req, res) => {
    const { name, description } = req.body;
    await Category.findByIdAndUpdate(req.params.id, {
        name,
        description
    });
    res.json('Category updated');
}

categoryCtrl.getPostOnCategory = async (req, res) => {
    const posts = await Category.findById(req.params.id).populate('posts')
    res.json(posts)
}
module.exports = categoryCtrl