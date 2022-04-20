import express from "express";
import cors from 'cors';
import db from "./database/db.js";
import routes from './routes/routes.js';
import bodyParser from "body-parser";

const app = express();

// app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());
app.use(express.json());
app.use('/api', routes);

try {
    await db.authenticate();
    console.log('Conexión exitosa a la DB');
} catch (error) {
    console.log(`El error de conexxión es: ${error}`);
}

// app.get('/', (req, res) => {
//     res.send('Hello World');
// });

app.listen(5050, () => {
    console.log('Server listo en http://localhost:5050/');
})