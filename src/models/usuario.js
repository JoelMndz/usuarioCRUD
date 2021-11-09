const { Schema, model } = require('mongoose');

const usuarioSchema = new Schema({
  nombre: String,
  apellido: String,
  cedula: String,
  telefono: String,
  email: String
});

module.exports = model('usuario',usuarioSchema)