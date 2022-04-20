import express from "express";
import { loginUser, verifyToken } from "../controllers/authController.js";
import { createProduct, deleteProduct, getAllProducts, getProduct, updateProduct } from "../controllers/productModel.js";
import { createUser, deleteUser, getAllUsers, getUser, updateUser } from "../controllers/userController.js";

const router = express.Router();


router.get('/login', loginUser);

router.get('/getAllProducts', verifyToken, getAllProducts);
router.get('/getProduct/:id', verifyToken, getProduct);
router.post('/createProduct', verifyToken, createProduct);
router.put('/updateProduct/:id', verifyToken, updateProduct);
router.delete('/deleteProduct/:id', verifyToken, deleteProduct);

router.get('/getAllUsers', verifyToken, getAllUsers);
router.get('/getUser/:id', verifyToken, getUser);
router.post('/createUser', verifyToken, createUser);
router.put('/updateUser/:id', verifyToken, updateUser);
router.delete('/deleteUser/:id', verifyToken, deleteUser);

export default router;