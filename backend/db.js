const mysql = require('mysql');

// Configuración de la conexión
const conexion = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'encargados',
});

// Conectar a la base de datos
conexion.connect((error) => {
  if (error) {
    console.error('Error al conectar a la base de datos:', error);
  } else {
    console.log('Conexión exitosa a la base de datos');
  }
});

// Exportar la conexión para poder utilizarla en otros archivos
module.exports = conexion;
