import productModel from "../models/productModel.js";

export const getAllProducts = async (req, res) => {
    try {
        const products = await productModel.findAll()
        res.json(products)
    } catch (error) {
        res.json({message: error.message});
    }
}

export const getProduct = async (req, res) => {
    try {
        const product = await productModel.findAll({
            where: { id: req.params.id }
        })
        res.json(product[0])
    } catch (error) {
        res.json({message: error.message});
    }
}

export const createProduct = async (req, res) => {
    try {
        await productModel.create(req.body)
        res.json({
            "message": "¡Registro creado correctamente!"
        })
    } catch (error) {
        
    }
}

export const updateProduct = async (req, res) => {
    try {
        await productModel.update(req.body, {
            where: { id: req.params.id }
        })
        res.json({
            "message": "¡Registro actualizado correctamente!"
        })
    } catch (error) {
        res.json({message: error.message});
    }
}

export const deleteProduct = async (req, res) => {
    try {
        await productModel.destroy({
            where: { id: req.params.id }
        })
        res.json({
            "message": "¡Registro eliminado correctamente!"
        })
    } catch (error) {
        res.json({message: error.message});
    }
}