require('dotenv').config();
const bodyParser = require('body-parser');
//const fs = require('fs');
const express = require('express');
const app = express();

//Set environment variables
const PORT = process.env.PORT;
const NODE_ENV = process.env.NODE_ENV;

/*let file;

const loadFile = () => file = JSON.parse(fs.readFileSync(process.env.DB, 'utf-8'));
const saveFile = () => file = fs.writeFileSync(process.env.DB, JSON.stringify(file));*/

//Middleware
app.use(bodyParser.json({}));
app.use(bodyParser.urlencoded({}))

//Routes

/*La ruta es el punto de entrada de un usuario a nuestra aplicación, en otras palabras, 
son la primera etapa en la que debemos trabajar para decidir qué hacer con cada petición
que reciba nuestra página o aplicación. Por lo general las rutas apuntan a un controlador 
(segunda etapa) y luego el controlador interactúa con los modelos, 
u otras clases y servicios para finalmente generar una respuesta que se enviará al usuario (HTML, JSON, etc.)*/

app.use('/api/users', require('./routes/user'));

/*app.get('/', (req, res) =>{
    loadFile();
    res.send(file);
});

app.get('/:id', (req,res) => {
    loadFile();
    const result = file.find(obj => parseInt(obj._id) === parseInt(req.params.id));
    res.send(result)
});

app.put('/:id', (req,res) => {
    loadFile();
    const result = file.find(obj => parseInt(obj._id) === parseInt(req.params.id));
    Object.assign(result,req.body);
    saveFile();
    res.sendStatus(200);
});

app.delete('/:id', (req,res,next) => {
    loadFile();
    const result = file.find(obj => parseInt(obj._id) === parseInt(req.params.id));
    Object.assign(result,{deleted:true, deletedAt: new Date()});
    saveFile();
    res.sendStatus(200);
});

app.post('/', (req,res,next) =>{
    try{
        loadFile();
        const object = req.body;
        const _id = file.length + 1;
        file.push({
            ... object,
            _id
        });
        saveFile();
        res.send({success: true});
    }catch (err){
        next(err);
    }
});

*/

app.listen(PORT, () => console.log(`Started at port ${PORT} in ${NODE_ENV} environment`));