import express from 'express';
import { createProduct, getAllProducts, getProductById, updateProduct, deleteProduct } from '../controllers/products.controller.js';
import { requireAuth } from '../middlewares/auth.middleware.js';

const router = express.Router();

// Public routes
router.get('/products', getAllProducts);
router.get("/products/:id", getProductById);

// Protected routes (require authorization token)
router.post("/products/create", requireAuth, createProduct);
router.put("/products/:id", requireAuth, updateProduct);
router.delete("/products/:id", requireAuth, deleteProduct);

export default router;
