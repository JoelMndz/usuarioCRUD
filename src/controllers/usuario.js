const UsuarioModel = require('../models/usuario');

class UsuarioController{
  async getAll(req, res){
    try {
      const data = await UsuarioModel.find();
      res.json({data})
    } catch (error) {
      res.json({error})
    }
  }

  async get(req, res){
    try {
      const {id} = req.params;
      const data = await UsuarioModel.findById(id);
      res.json({data});
    } catch (error) {
      res.json({error})
    }
  }

  async create(req, res){
    try {
      const data = await UsuarioModel.create(req.body);
      res.json({data});
    } catch (error) {
      res.json({error});
    }
  }

  async update(req, res){
    try {
      const {id} = req.params;
      const data = await UsuarioModel.findByIdAndUpdate(id, req.body);
      res.json({data});
    } catch (error) {
      res.json({error});
    }
  }

  async delete(req, res){
    try {
      const {id} = req.params;
      const data = await UsuarioModel.findByIdAndDelete(id);
      res.json({data})
    } catch (error) {
      res.json({error})
    }
  }
}

module.exports = new UsuarioController();