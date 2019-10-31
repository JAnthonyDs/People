const express = require('express')
const multer = require('multer')
const uploadConfig = require('./config/upload')

const UserController = require('./controllers/UserController')
const routes =  express.Router();
const upload = multer(uploadConfig);

routes.post('/users',upload.single('foto') ,UserController.store)

module.exports = routes;