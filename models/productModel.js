import db from '../database/db.js';
import { DataTypes } from 'sequelize';

const productModel = db.define('products', {
    title: { type: DataTypes.STRING },
    price: { type: DataTypes.STRING },
    description: { type: DataTypes.STRING },
    category: { type: DataTypes.STRING },
    image: { type: DataTypes.STRING },
    createdBy: { type: DataTypes.STRING }
});

export default productModel;