const express = require('express');

const OngsController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngsController.index);
routes.post('/ongs', OngsController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;

/*
Rotas: precisa informar o caminho, conjunto completo 
Recursos: /users


Metodos HTTP >
GET: buscar uma informação do backend
POST: criar uma informação, se a rota for criar um usuario, é post
PUT: alterar uma informação do backend
DELETE: deletar uma informação no backend


Tipos de parâmetros:
Query params: parametros enviados na rota (nomeados), após o simbolo de interrogação > filtros, paginação app.get('/users?page2&name=Natalia&idade=19'
Route params: parametros utilizados para identificar recursos app.get('/users/1'
Request body: corpo da requisoção utilizado para criar ou alterar recursos


Banco de dados:
SQL: sql, mysql, sqlite, postgre
NoSQL: mongodb, couchdb


Driver: SELECT * FROM users
Query Builder: table('users').select('*').where()
*/