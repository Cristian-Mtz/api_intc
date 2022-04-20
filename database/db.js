import {Sequelize} from 'sequelize';

const db = new Sequelize('prueba_intc', 'root', '', {
    host: 'localhost',
    dialect: 'mysql' 
});

// const db = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASS, {
//     host: process.env.DB_HOST,
//     dialect: 'mysql' 
// });

export default db;