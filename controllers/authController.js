import jwt  from "jsonwebtoken";
import bcryptjs from "bcryptjs";
import userModel from "../models/userModel.js"


export const loginUser = async (req, res) => {
    try {
        if (!req.body.username || !req.body.password) {
            res.json({
                "message": "Ingrese un usuario y contraseña por favor"
            })
        }else{
            const user = await userModel.findAll({
                where: { username: req.body.username }
            })
            if (!(await bcryptjs.compare(req.body.password, user[0].password))) {
                res.json({
                    "message": "Ingrese usuario y contraseña correctos por favor"
                })
            }else{
                console.log(user[0].id)
                const token = jwt.sign({id:user[0].id}, 'hola', {
                    expiresIn: '7d'
                })
                res.json({username: user[0].username, rol: user[0].rol ,token});
            }
        }
    } catch (error) {
        res.json({message: error.message});
    }
}

export const verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    console.log(authHeader);
    console.log(token);
    if (token==null) {
        return res.status(401).send("Token requerido");
    } 
    jwt.verify(token, 'hola', (err, user) => {
        if (err) {
            return res.status(403).send("Token invalido");
        }
        console.log(user);
        req.body.username = user;
        next();
    })
    
}