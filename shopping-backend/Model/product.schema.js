import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  productDescription: {
    type: String,
    required: true,
  },
  productPrice: {
    type: Number,
    required: true,
  },
  productImageLink: {
    type: String,
    required: true,
  },
  productDiscount: {
    type: Number,
    required : true,
    min:[0, 'you enter more then meninum amount']
  },
  productQuantity: {
    type: Number,
    default: 0,
  },
  sellerName: {
    type: String,
    required: true,
  },
});

const Product = mongoose.model('Product', productSchema);

export { Product };
