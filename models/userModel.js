import db from '../database/db.js';
import { DataTypes } from 'sequelize';

const userModel = db.define('users', {
    username: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
    phone: { type: DataTypes.STRING },
    rol: { type: DataTypes.STRING }
});

export default userModel;