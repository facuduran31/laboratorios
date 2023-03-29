const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const autenticacion = require('./auth');
const app = express();
const port = process.env.PORT || 3030;
const routerDocentes = require('./routers/docentes.js');
const routerRegistrar = require('./routers/registrar');
const routerLogin = require('./routers/login');
const routerIsLoggedIn = require('./routers/isLoggedIn');
const routerLaboratorios = require('./routers/laboratorios');
const routerComputadoras = require('./routers/computadoras');

// Middleware para permitir solicitudes desde cualquier origen
app.use(cors());
// Middleware para analizar el cuerpo de las solicitudes como JSON
app.use(bodyParser.json());


// Ruta básica
app.get('/', (req, res) => {
  res.send('El servidor se está ejecutando correctamente.');
});

// Routers
app.use('/docentes', autenticacion, routerDocentes);
app.use('/registrar', routerRegistrar);
app.use('/login', routerLogin);
app.use('/isloggedin', autenticacion, routerIsLoggedIn);
app.use('/laboratorios', routerLaboratorios);
app.use('/computadoras', routerComputadoras)

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
