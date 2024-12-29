
const product = require('../models/product.model.js')
const getProducts = async (req, res) => {
    try {
        const allProducts = await product.find({});
        res.status(200).json(allProducts);
    } catch (error) {
        console.error('Error fetching products:', error.message);
        res.status(500).json({ message: error.message });
    }
}

const getProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const singleProduct = await product.findById(id);
        if (!singleProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(singleProduct);
    } catch (error) {
        console.error('Error fetching product:', error.message);
        res.status(500).json({ message: error.message });
    }
}

const createProduct = async (req,res)=>{
    try {
        const newProduct = await product.create(req.body);
        res.status(201).json(newProduct); // Use 201 for created
      } catch (error) {
        console.error('Error creating product:', error.message);
        res.status(500).json({ message: error.message });
      }
    }

const updateProduct = async (req,res)=>{
    try {
        const { id } = req.params;
        const updatedProduct = await product.findByIdAndUpdate(id, req.body, {
          new: true, // Return the updated document
          runValidators: true, // Validate updates
        });
    
        if (!updatedProduct) {
          return res.status(404).json({ message: 'Product not found' });
        }
    
        res.status(200).json(updatedProduct);
      } catch (error) {
        console.error('Error updating product:', error.message);
        res.status(500).json({ message: error.message });
      }
    }

const deleteProduct = async (req,res)=>{
    try {
        const { id } = req.params;
        const deletedProduct = await product.findByIdAndDelete(id);
    
        if (!deletedProduct) {
          return res.status(404).json({ message: 'Product not found' });
        }
    
        res.status(200).json({ message: 'Product deleted successfully' });
      } catch (error) {
        console.error('Error deleting product:', error.message);
        res.status(500).json({ message: error.message });
      }
    }

module.exports = { 
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct,
 }
