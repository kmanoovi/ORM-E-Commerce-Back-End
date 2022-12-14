const router = require('express').Router();
const { restart } = require('nodemon');
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findAll();
    res.status(200).json(categoryData);
  }
  catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products

  try {
    const categoryData = await Product.findOne();
    res.status(200).json(categoryData);
  }
  catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', (req, res) => {
  // create a new category
  try {
    const newCategory = await Category.create();
    res.status(200).json(newCategory);
  }
  catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  try {
    const updateCategory = await Product.update();
    res.status(200).json(updateCategory);
  }
  catch (err) {
    res.status(500).json(err);
  };
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  try {
    const deleteCategory = await Product.delete();
    res.status(200).json(deleteCategory);
  }
  catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
