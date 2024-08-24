import { Product } from '../Model/product.schema.js';

const createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);    
    const doc = await product.save();
    console.log({ doc });
    
    res.send("Product created successfully");
  } catch (err) {
    console.error(err);
    res.status(500).send("An error occurred while creating the product");
  }
};

const showAllItem = async (req, res) => {
  // res.send("hello ji");
  const products = await Product.find();
  res.json(products);
}

const deleteProduct = async (req, res) => {
  const { id } = req.params; 
  console.log(id);

  try {
    const deletedProduct = await Product.findByIdAndDelete(id);
    if (!deletedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'An error occurred while deleting the product' });
  }
}

export { createProduct, showAllItem, deleteProduct};
