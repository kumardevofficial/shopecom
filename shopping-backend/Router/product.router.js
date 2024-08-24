import express from 'express'
import {createProduct, showAllItem, deleteProduct} from '../Controller/product.controller.js'
const router = express.Router();

router.get("/", showAllItem).post("/post-me", createProduct).delete('/:id', deleteProduct);

export {router}
