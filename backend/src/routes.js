const express = require('express')
const multer = require('multer')
const uploadConfig = require('./config/upload')

const UserController = require('./controllers/UserController')
const routes =  express.Router();
const upload = multer(uploadConfig);

routes.post('/CadastrarUsers',upload.single('foto') ,UserController.store)
routes.get('/encontrarUsers',UserController.encontrar)
routes.get('/listarTodos', UserController.index)
routes.post('/logar',UserController.autenticar)

module.exports = routes;