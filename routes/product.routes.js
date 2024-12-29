const express = require('express')
const product = require('../models/product.model.js')
const {getProducts, getProduct,deleteProduct, createProduct,updateProduct} = require('../controllers/productController.js')
const { model } = require('mongoose')
const router = express.Router()


 router.get('/', getProducts)

 router.get('/:id', getProduct)
 
 router.post('/', createProduct)

 router.put('/:id', updateProduct)

 router.delete('/:id', deleteProduct)

 module.exports = router