const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

const OngsController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngsController.index);

routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
    })
}), OngsController.create);

routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
}), ProfileController.index);

routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    })
}), IncidentController.index);

routes.post('/incidents', IncidentController.create);

routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    }),
}), IncidentController.delete);

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