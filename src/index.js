const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');

const {PORT, MONGO_URI} = require('./config');
const UsuarioRoute = require('./routes/usuario');

const app = express();

//BD
mongoose.connect(MONGO_URI,{
  useNewUrlParser: true,
  useUnifiedTopology: true
})

//Configuracion
app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.set('port',PORT);

//Routes
app.use('/api/usuario', UsuarioRoute)

app.listen(app.get('port'),()=>{
  console.log(`server on port ${app.get('port')}`);
})